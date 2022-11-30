<script>
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let userName;
    export let showError = false;

    let nameInput = ''

    const setNameEventDispatch = () => {
        if(nameInput){
            dispatch('setname',{
                name: nameInput
            })
            nameInput = ''
        }
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
    <div class="inpDiv">
        <input type="text" placeholder="Enter name" bind:value={nameInput}>
        <button id="setName" on:click={setNameEventDispatch}>Set Name</button>
    </div>

    <div class="startDiv">
        <button class="start" on:click={getStarted}>Get Started with the Chat</button>
    </div>
    {#if showError}
      <p>Set a name first!</p>
    {/if }
</main>

<style>
    main{
        padding: 10px;
    }
    div.inpDiv{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
        gap: 30px;
    }

    input{
        height: 30px;
        border-radius: 5px;
        border-width: 0;
        padding: 10px;
        margin: 5px 0;
        outline: none;
        font-size: 14px;
        flex: 1;
        font-family: 'Lato',sans-serif;
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
    }
    div.startDiv{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button.start{
        padding: 10px 40px;
        margin: 20px 0;
    }
    p{
        color: red;
        text-align: center;
    }
    button#setName{
        flex: 1;
        background-color: #7ec5ff;
    }

</style>