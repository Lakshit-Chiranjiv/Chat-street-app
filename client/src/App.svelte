<script>
  import Chat from "./components/Chat.svelte";
  import Header from "./components/Header.svelte";
  import NameInput from "./components/NameInput.svelte";

  import { Router, Route } from "svelte-routing";

  let userName = ''
  let showError = false

  const setUserName = (e) => {
    userName = e.detail.name
  }

</script>

<main>
  <Header/>
  <h1>Hello {userName ? userName : 'User'}</h1>
  <NameInput on:setname={setUserName} userName={userName} showError={showError}/>
  <Chat/>
</main>

<style>

</style>
