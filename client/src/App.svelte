<script>
  import Chat from "./components/Chat.svelte";
  import Header from "./components/Header.svelte";
  import NameInput from "./components/NameInput.svelte";
  let userName = ''

  const setUserName = (e) => {
    userName = e.detail.name
  }

</script>

<main>
  <Header/>
  <h1>Hello {userName ? userName : 'User'}</h1>
  <NameInput on:setname={setUserName}/>
  <div class="startDiv">
      <button class="start">Get Started with the Chat</button>
  </div>
  <p>Set a name first!</p>
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
    }
    p{
        color: red;
        text-align: center;
    }
</style>
