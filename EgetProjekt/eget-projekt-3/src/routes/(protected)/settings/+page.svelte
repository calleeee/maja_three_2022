<script lang="ts">
	import { enhance } from '$app/forms';
    import type {PageData} from './$types'

    export let data: PageData

    let disabled: boolean;

    if(data.darkMode == true){
        disabled = true
    } else if(data.darkMode == false){
        disabled = false
    }
</script>

<main>
    <div class="profilePicSelect">
        <img src={data.currentProfilePic} alt="Unknown" class="current">
    
        <h1 class="profilePicTitle">Choose another profile picture</h1>
    
        <div class="defaultSelections">
            <img src="" alt="" class="defaultPic">
            <img src="" alt="" class="defaultPic">
            <img src="" alt="" class="defaultPic">
            <img src="" alt="" class="defaultPic">
        </div>
    
        <form action="?/profilePic" method="POST" use:enhance >
            <h1 class="choiceTitle">Choose your own by entering the link to the image</h1>
            <input type="text" name="picURL" placeholder='Image URL'>
    
            <button>Submit</button>
        </form>
    </div>
    
    <div class="darkMode">
        <h1 class="settingsUndertitel">Turn darkmode on or off</h1>
        <form action="?/darkmode" method="POST">
            <button disabled={disabled} name="modeSelect" type="submit" value="dark">Dark</button>
            <button disabled={!disabled} name="modeSelect" type="submit" value="light">Light</button>
        </form>
    </div>
    
    <h1 class="settingsTitle">Log out</h1>
    <div class="logout">
        <form action="?/logout" method="POST"   >
            <button>Logout</button>
        </form>
    </div>
</main>

<style>
    main{
        padding-left: 3%;
    }
    .current{
        margin-top: 50px;
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        overflow: hidden;
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
    button:disabled{
        background-color: rgb(189, 189, 189);
    }
</style>