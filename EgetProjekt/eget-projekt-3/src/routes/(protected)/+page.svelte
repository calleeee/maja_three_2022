<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData

</script>

<img src={data.profilePic} alt="Profile">

{#if data.siteVisits <= 1}
    <h1>Welcome {data.username}! We're glad to have you</h1>
{:else}
    <h1>Welcome back {data.username}!</h1>
{/if}

<p>Chat with perverted 47 year olds for absolutely free</p>

<style>
    img{
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 50%;
        overflow: hidden;
    }
</style>