<script lang="ts">
	import { enhance } from '$app/forms';
    import type {PageData} from './$types'

    export let data: PageData
</script>

<div class="profilePicSelect">
    <img src={data.currentProfilePic} alt="Unknown" class="current">

    <h1 class="profilePicTitle">Choose another profile picture</h1>

    <div class="defaultSelections">
        <img src="" alt="" class="defaultPic">
        <img src="" alt="" class="defaultPic">
        <img src="" alt="" class="defaultPic">
        <img src="" alt="" class="defaultPic">
    </div>

    <form action="?/profilePic" method="POST" use:enhance>
        <h1 class="choiceTitle">Choose your own by entering the link to the image</h1>
        <input type="text" name="picURL">

        <button>Submit</button>
    </form>
</div>

<h1 class="settingTitle">Select a color theme</h1>
<div class="themeChoice">
    <div class="current"></div>
    <div class="colorSelections">
        <div class="red"></div>
        <div class="yellow"></div>
        <div class="green"></div>
        <div class="blue"></div>
        <div class="orange"></div>
        <div class="white"></div>
    </div>
</div>

<h1 class="settingsTitle">Dark mode</h1>
<div class="darkMode">
    <h1 class="settingsUndertitel">Turn darkmode on or off</h1>
    <form action="?/darkmode" method="POST">
        <input type="checkbox" name="darkmode" value="dark">

        <button>Submit</button>
    </form>
</div>

<style>
    .current{
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        overflow: hidden;
    }
</style>