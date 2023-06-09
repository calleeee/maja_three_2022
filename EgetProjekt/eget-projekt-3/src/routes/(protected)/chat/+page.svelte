<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";

  export let data: PageData;
  export let form: ActionData;

  let color: string;

  if(data.darkMode == true){
    color = 'white'
  } else {
    color = 'black'
  }
</script>

<main>
  <h1>Chats</h1>
  <hr />
  {#each data.chats as chat}
    <div style="display:flex">
      <p><a href={"/chat/" + chat.id} style="color: {data.darkMode};">{chat.name}</a></p>
      {#if data.favoriteChats.includes(chat.id)}
        <form action="?/unfavorite" method="post">
          <input type="hidden" name="chatId" value={chat.id} />
          <button type="submit">unfavorite</button>
        </form>
      {:else}
        <form action="?/favorite" method="post">
          <input type="hidden" name="chatId" value={chat.id} />
          <button type="submit">favorite</button>
        </form>
      {/if}
    </div>
  {/each}
  
  <hr />
  
  <form use:enhance={(e) => e.form.reset()} method="post" action="?/add">
    <input type="text" name="chatname" placeholder="chat name" id="" />
    <button type="submit">add forum</button>
    {#if form?.error}
      {form.error}
    {/if}
  </form>
</main>

<style>
  main{
    padding-left: 3%;
  }
  a{
    text-decoration: none;
    transition: all 300ms;
  }
  a:hover{
    color: grey;
  }
</style>
