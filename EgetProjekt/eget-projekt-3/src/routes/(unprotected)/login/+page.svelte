<script lang="ts">
	import { enhance } from '$app/forms';
    import type { ActionData, PageData } from './$types';
    
    export let form: ActionData;
</script>

<main>
    <form action="?/login" use:enhance method="POST">
        <input type="text" name="username" id='username' placeholder="Username">
    
        <input type="password" name="password" id='password' placeholder="Password">
    
        {#if form?.invalid}
            <p class="error">Wrong format entered</p>
        {/if}
    
        {#if form?.password}
            <p class="error">Passwords do not match</p>
        {/if}
    
        {#if form?.userFound == false}
            <p class="error">This user does not exist</p>
        {/if}
    
        <button>Login</button>
    </form>
    
    <p>If you don't already have an account, <a href="/register">register</a></p>
</main>



<style>
    .error{
        color: tomato;
    }

    main{
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }

    input{
        border: none;
        width: 250px;
        height: 50px;
        border-radius: 10px;
        background-color: rgb(251, 251, 251);
        padding-left: 20px;
        margin-left: auto;
        margin-right: auto;
    }

    button{
        border: none;
        width: 250px;
        height: 50px;
        border-radius: 10px;
        background-color: rgb(0, 128, 255);
        color: white;
        margin-left: auto;
        margin-right: auto;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-content: center;
        justify-content: center;
    }
    p{
        margin-left: auto;
        margin-right: auto;
    }
</style>