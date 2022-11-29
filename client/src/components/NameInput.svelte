<script>
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    let nameInput = ''

    const setNameEventDispatch = () => {
        dispatch('setname',{
            name: nameInput
        })
    }

</script>

<main>
    <div class="inpDiv">
        <input type="text" placeholder="Enter name" bind:value={nameInput}>
        <button id="setName" on:click={setNameEventDispatch}>Set Name</button>
    </div>
    <div class="startDiv">
        <button class="start">Get Started with the Chat</button>
    </div>
    <p>Set a name first!</p>
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

    div.startDiv{
        display: flex;
        justify-content: center;
        align-items: center;
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

    button#setName{
        flex: 1;
        background-color: #7ec5ff;
    }

    button.start{
        padding: 10px 40px;
    }

    p{
        color: red;
        text-align: center;
    }

</style>