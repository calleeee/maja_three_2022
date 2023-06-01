<script lang="ts">
	import { enhance } from '$app/forms';
    import type { ActionData, PageData } from './$types';
    
    export let form: ActionData;
</script>

<form action="?/register" use:enhance method="POST">
    <input type="text" id="email" placeholder="email">

    <input type="text" id='username' placeholder="Username">

    <input type="password" id='password' placeholder="Password">

    <input type="password" id="passwordConfirm" placeholder="Password Conifrm">

    {#if form?.error}
        <p class="error">{form?.error}</p>
    {/if}

    <button>Register</button>
</form>

<p>If you already have an account, <a href="/login">log in</a></p>

<style>
    .error{
        color: tomato;
    }
</style>