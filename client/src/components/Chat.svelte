<script>
// @ts-nocheck

    import { query,mutation } from 'svelte-apollo'

    import { navigate } from "svelte-routing";

    import { GET_MSGS, SEND_MSG } from '../queries.js';
    import Error from './Error.svelte';

    import Loader from './Loader.svelte';
    import Message from "./Message.svelte";
    let msgText = ''

    const backClick = () => {
        navigate("/",{ replace: true })
    }

    export let userName = '';
    const msgs = query(GET_MSGS)

    const sendMessage = mutation(SEND_MSG);
</script>

<main>
    <div class="chat">
        <!-- messages -->
        <div class="msgs">
            {#if $msgs.loading}
                <Loader/>
            {:else if $msgs.error}
                <Error errMsg={$msgs.error.message}/>
            {:else}
                {#each $msgs.data.messages as message (message.id)}
                    <Message person={message.user} msg={message.msg} isSelf={message.user===userName}/>
                {/each}
            {/if}
            <!-- should render messages in reverse order as flex direction is column reverse -->

        </div>
        <!-- msg typing & send -->
        <div class="msg-type">
            <input type="text" placeholder="Enter your message..." bind:value={msgText}>
            <button>Send 📩</button>
        </div>
    </div>

    <div class="back">
        <button on:click={backClick}>Back</button>
    </div>
</main>

<style>
    div.chat{
        border-radius: 10px;
        background-color: #f7f7f7;
        padding: 20px;
    }

    div.msgs{
        margin-bottom: 40px;
        height: 400px;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        /* flex-direction: column-reverse; */
    }

    div.msg-type{
        display: grid;
        grid-template-columns: 4fr 1fr;
        grid-column-gap: 10px;
        align-content: center;
    }

    input{
        height: 30px;
        border-radius: 5px;
        border-width: 0;
        padding: 10px;
        margin: 5px 0;
        outline: none;
        font-size: 14px;
        font-family: 'Lato',sans-serif;
        color: white;
        background-color: #353535;
    }

    button{
        background-color: #9aff7e;
        font-family: 'Lato',sans-serif;
        font-weight: 800;
        letter-spacing: 1px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
        border-width: 0;
        margin: 5px 0;
    }

    div.back{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
    }

    div.back > button {
        background-color: #ff855c;
        padding: 10px 30px;
    }
</style>