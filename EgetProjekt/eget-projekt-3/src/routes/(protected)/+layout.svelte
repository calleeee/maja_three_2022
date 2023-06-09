<script lang="ts">
	import Header from "$lib/components/header.svelte";
	import type { LayoutData } from "./$types";


    export let data: LayoutData

    let darkClass: string

    if(data.darkMode == true){
        darkClass = 'dark'
    } else if(data.darkMode == false){
        darkClass = 'light'
    }
</script>

<link rel="preconnect" href="https://fonts.googleapis.com"> 
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com"> 
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@500&display=swap" rel="stylesheet">

<main class={darkClass}>
    <Header dark={data?.darkMode}></Header>

    <slot />
</main>


<style>
    :global(body){
        padding: 0px;
        margin: 0px;
    }
    main{
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 0px;
        bottom: 0px;
        left: 0%;
        right: 0%;
        height: 100%;
    }
    .dark{
        background-color: rgb(15, 15, 15);
        color: rgb(237, 237, 237);
    }
    .light{
        background-color: rgb(255, 255, 255);
        color: rgb(17, 17, 17);
    }
    .center{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .headerOption{
        text-decoration: none;
        display: flex;
        flex-direction: column;
        color: black;
        background-color: white;
        width: 200px;
        height: 30px;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
    }
    :global(h1){
        font-family: 'Quicksand', sans-serif;
    }
    :global(p){
        font-family: 'Quicksand', sans-serif;
    }
</style>