<script>

</script>

<main>
    <p class="msg">
        <span class="person">Jackob</span><br>
        <span>How are you?</span>
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
        align-self: flex-end;
    }
    span.person{
        font-size: 12px;
    }
</style>