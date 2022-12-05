<script>
// @ts-nocheck

  import Chat from "./components/Chat.svelte";
  import Header from "./components/Header.svelte";
  import NameInput from "./components/NameInput.svelte";
  
  import { ApolloClient, InMemoryCache } from "@apollo/client/core";
  import { setClient } from 'svelte-apollo'

  import { Router, Route } from "svelte-routing";
  import NotFound from "./components/NotFound.svelte";

  let userName = ''
  let showError = false

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});
  setClient(client);

  const setUserName = (e) => {
    userName = e.detail.name
  }

</script>

<main>
  <Header/>
  <h1>Hello {userName ? userName : 'User'}</h1>

  <Router>
    <Route path='/'>
      <NameInput on:setname={setUserName} userName={userName} showError={showError}/>
    </Route>
    <Route path='/chat'>
      <Chat userName={userName}/>
    </Route>
    <Route path='*'>
      <NotFound/>
    </Route>
  </Router>

  

</main>

<style>

</style>
