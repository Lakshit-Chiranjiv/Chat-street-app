<script>
  import Chat from "./components/Chat.svelte";
  import Header from "./components/Header.svelte";
  import NameInput from "./components/NameInput.svelte";
  let userName = ''

</script>

<main>
  <Header/>
  <h1>Hello {userName ? userName : 'User'}</h1>
  <NameInput/>
  <Chat/>
</main>

<style>
  
</style>
