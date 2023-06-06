<script lang="ts">
	import type { LayoutData } from "./$types";


    export let data: LayoutData

    let darkClass: string

    if(data.darkMode == true){
        darkClass = 'dark'
    } else if(data.darkMode == false){
        darkClass = 'light'
    }
</script>

<main class={darkClass}>
    <header>
        <div class="headerOption"><a href="/settings">Settings</a></div>
        <div class="centre">
            <div class="logo"><img src="/images/chatlogo.jpg" alt="Chat bubble"></div>
            <div class="headerOption"><a href="/">Home</a></div>
        </div>
        <div class="headerOption"><a href="/chat">Chat</a></div>
    </header>


    <slot />
</main>


<style>
    :global(body){
        padding: 0px;
        margin: 0px;
    }
    img {
        width: 40px;
    }
    main{
        height: 100vh;
    }
    .dark{
        background-color: rgb(15, 15, 15);
        color: rgb(237, 237, 237);
    }
    .light{
        background-color: rgb(255, 255, 255);
        color: rgb(17, 17, 17);
    }
</style>