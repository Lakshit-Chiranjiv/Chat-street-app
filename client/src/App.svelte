<script>
  import Chat from "./components/Chat.svelte";
  import Header from "./components/Header.svelte";
  import NameInput from "./components/NameInput.svelte";
  let userName = ''
  let showError = false

  const setUserName = (e) => {
    userName = e.detail.name
  }

  const getStarted = () => {
    if(userName === ''){
      showError = true
      setTimeout(()=>{
        showError = false
      }, 5000)
    }
    else{
      //route to chat page
    }
  }

</script>

<main>
  <Header/>
  <h1>Hello {userName ? userName : 'User'}</h1>
  <NameInput on:setname={setUserName}/>
  <div class="startDiv">
      <button class="start" on:click={getStarted}>Get Started with the Chat</button>
  </div>
  {#if showError}
    <p>Set a name first!</p>
  {/if }
  <Chat/>
</main>

<style>

    div.startDiv{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button{
        background-color: #9aff7e;
        font-family: 'Lato',sans-serif;
        font-weight: 800;
        letter-spacing: 1px;
        font-size: 16px;
        cursor: pointer;
        height: 50px;
        border-radius: 5px;
        border-width: 0;
        padding: 10px 40px;
        margin: 20px 0;
    }
    p{
        color: red;
        text-align: center;
    }
</style>
