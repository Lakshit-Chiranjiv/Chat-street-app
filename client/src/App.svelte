<script>
  import Chat from "./components/Chat.svelte";
  import Header from "./components/Header.svelte";
  import NameInput from "./components/NameInput.svelte";
  
  import { ApolloClient, InMemoryCache } from "@apollo/client/core";
  import { setClient } from 'svelte-apollo'

  import { Router, Route } from "svelte-routing";

  let userName = ''
  let showError = false

  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
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
      <Chat/>
    </Route>
  </Router>

  

</main>

<style>

</style>
