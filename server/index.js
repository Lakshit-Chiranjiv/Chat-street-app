import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';

async function startApolloServer(typeDefs, resolvers) {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

const typeDefs = `
    type Message {
        id: ID!
        user: String!
        msg: String!
        type: Int!
    }

    type Query {
        messages: [Message!]
    }

`


const messages = [
    {
        id: "id1",
        user: "Lakshit",
        msg: "Hi i am lakshit",
        type: 2
    },
    {
        id: "id2",
        user: "Sagar",
        msg: "Ok i am sagar",
        type: 4
    }
]

const resolvers = {
    Query: {
        messages: () => messages
    }
}

