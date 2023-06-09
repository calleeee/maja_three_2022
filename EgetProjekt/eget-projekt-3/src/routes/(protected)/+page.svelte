<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData

</script>

<main>
   <a href="/chat"><div class="button">Chat</div></a> 
    <div class="center">
        <img src={data.profilePic} alt="Profile">
        
        {#if data.siteVisits <= 1}
            <h1>Welcome {data.username}! We're glad to have you</h1>
        {:else}
            <h1>Welcome back {data.username}!</h1>
        {/if}
    </div>
    <a href="/settings"><div class="button">Settings</div></a>
</main>

<style>
    img{
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }
    main{
        display: flex;
        flex-direction: row;
        gap: 90px;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .button{
        display: flex;
        flex-direction: column;
        border: none;
        width: 250px;
        height: 50px;
        border-radius: 10px;
        background-color: rgb(0, 128, 255);
        color: white;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        transition: all 300ms;
    }
    .center{
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
    a{
        text-decoration: none;
        color: white;
        font-family: 'quicksand', sans-serif;
    }
    .button:hover{
        background-color: rgb(0, 83, 184);
    }
</style>