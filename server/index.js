import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import express from 'express';
import http from 'http';

async function startApolloServer(typeDefs, resolvers) {
  const app = express();

  const httpServer = http.createServer(app);

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
  });

  const serverCleanup = useServer({ schema }, wsServer);

  const server = new ApolloServer({
    schema,
    plugins: [
        // Proper shutdown for the HTTP server.
        ApolloServerPluginDrainHttpServer({ httpServer }),
    
        // Proper shutdown for the WebSocket server.
        {
          async serverWillStart() {
            return {
              async drainServer() {
                await serverCleanup.dispose();
              },
            };
          },
        },
      ],
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

    type Mutation {
        sendMessage(input: MsgInput!): Message
    }

    input MsgInput {
        user: String!,
        msg: String!,
        type: Int!
    }

    type Subscription {
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
    },
    {
        id: "id3",
        user: "gg",
        msg: "Ok i am gg",
        type: 4
    },
    {
        id: "id4",
        user: "Sagar",
        msg: "Ok i am sagar2",
        type: 4
    },
    {
        id: "id5",
        user: "gg",
        msg: "Ok i ar",
        type: 4
    },
    {
        id: "id6",
        user: "gg",
        msg: "Ok i am gg",
        type: 4
    },
    {
        id: "id7",
        user: "Sagar",
        msg: "Ok i am sagar2",
        type: 4
    },
    {
        id: "id8",
        user: "gg",
        msg: "Ok i argg",
        type: 4
    }
]

const resolvers = {
    Query: {
        messages: () => messages
    },

    Mutation: {
        sendMessage: (parent,{input}) => {
            const { user,msg,type } = input
            const id = "id"+(messages.length+1)
            messages.push({
                id,
                user,
                msg,
                type
            })

            return {
                id,
                user,
                msg,
                type
            }
        }
    }
}

startApolloServer(typeDefs,resolvers)
