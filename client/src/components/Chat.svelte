<script>
    import Message from "./Message.svelte";
    let msgText = ''
</script>

<main>
    <div class="chat">
        <!-- messages -->
        <div class="msgs">
            <Message person='Lakshit' msg='Hey there'/>
            <Message person='Jackob' msg='Hi bro' isSelf/>
            <Message person='Lakshit' msg='U okay?'/>
            <Message person='Jackob' msg="Yaa I'm fine" isSelf/>
        </div>
        <!-- msg typing & send -->
        <div class="msg-type">
            <input type="text" placeholder="Enter your message..." bind:value={msgText}>
            <button>Send 📩</button>
        </div>
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
</style>