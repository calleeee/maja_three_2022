<script lang="ts">
	import { enhance } from '$app/forms';
    import type { ActionData, PageData } from './$types';
    
    export let form: ActionData;
</script>

<form action="?/register" use:enhance method="POST">
    <input type="text" name="email" placeholder="email">

    <input type="text" name='username' placeholder="Username">

    <input type="password" name='password' placeholder="Password">

    <input type="password" name="passwordConfirm" placeholder="Password Conifrm">

    {#if form?.invalid}
        <p class="error">Wrong format entered</p>
    {/if}

    {#if form?.match}
        <p class="error">Passwords do not match</p>
    {/if}

    {#if form?.user}
        <p class="error">This user already exists</p>
    {/if}

    <button>Register</button>
</form>

<p>If you already have an account, <a href="/login">log in</a></p>

<style>
    .error{
        color: tomato;
    }
</style>