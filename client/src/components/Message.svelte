<script>
    export let person,msg;
    export let isSelf = false;
</script>

<main>
    <p class={isSelf ? "msg self-msg" : "msg"}>
        <span class="person">{isSelf ? 'You' : person}</span><br>
        <span>{msg}</span>
    </p>
</main>

<style>
    main{
        display: flex;
        flex-direction: column;
    }
    p.msg{
        padding: 10px;
        border-radius: 8px;
        background-color: aquamarine;
        margin: 10px;
        width: fit-content;
    }

    p.self-msg{
        background-color: #7fceff;
        align-self: flex-end;
    }
    span.person{
        font-size: 12px;
    }
</style>