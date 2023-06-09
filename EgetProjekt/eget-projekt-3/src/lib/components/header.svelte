<script lang="ts">

    export let dark: any;

    let color: string;
    let textColor: string;

    if(dark == true){
        color= 'white'
        textColor = 'rgb(42, 42, 42)'
    } else if (dark == false){
        color = 'rgb(42, 42, 42)'
        textColor = 'white'
    }
</script>

<main style="backgtound-color: {color}; color: {textColor};">
    <header>
        <a href="/">
            <img src="/images/chatlogo.png" alt="">
        </a>
        <div id="dropdown">
            <div id="dropdownButton">
                <span class="dot" style="background-color: {color};"></span>
                <span class="dot" style="background-color: {color};"></span>
                <span class="dot" style="background-color: {color};"></span>
            </div>
            <div class="dropdownContent" style="color: {textColor};">
                <a href="/chat" style="color: {color};">
                    <div class="dropdownOption"><h2>Chat</h2></div>
                </a>
                <a href="/settings" style="color: {color};">
                    <div class="dropdownOption"><h2>Settings</h2></div>
                
            </div>
        </div>
    </header>
</main>

<style>
    main{
        padding: 0px;
        margin: 0px;
    }
    img{
        width: 60px;
    }
    header{
        display: flex;
        flex-direction: row;
        align-content: center;
        align-self: center;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        height: 70px;
        position: relative;
        z-index: 99;
    }
    #dropdown{
        position: absolute;
        right: 0px;
    }
    #dropdownButton{
        display: flex;
        flex-direction: column;
        gap: 6px;
        height: 70px;
        width: 60px;
        justify-content: center;
        align-items: center;
    }
    .dropdownContent{
        display: block;
        transform: scaleX(0);
        gap: 10px;
        height: calc(100vh - 70px);
        position: absolute;
        top: 70px;
        right: 0px;
        transition: transform 200ms ease-in-out;
        transform-origin: right;
    }
    .dropdownOption{
        margin-top: 0px;
        margin-bottom: 0px;
        padding: 0px;
        padding-left: 30px;
        padding-right: 90px;
        transition: all 200ms;
    }
    .dropdownOption:hover{
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }

    h2{
        margin: 0px;
        padding: 0px;
        font-size: 35px;
        font-family: 'Cairo',sans-serif;
    }
    .dot{
        height: 7px;
        width: 7px;
        border-radius: 50%;
        display: block;
        transition: all 200ms;
    }
    #dropdown:hover .dropdownContent{
        /* display: block; */
        transform: scaleX(1);
        /* animation: turn 250ms ease-in-out forwards; */
        
    }
    #dropdown:hover .dot{
        position: absolute;
        top: 29.5px;
        height: 13px;
        width: 13px;
    }
    a{
        text-decoration: none;
    }

    

    @media only screen and (orientation: portrait) and (max-width: 600px) {
        .dropdownContent{
            width: 100vw;
            transform: scaleY(0);
            transform-origin: top;
            height: fit-content;
        }
        .dropdownContent:hover{
            transform: scaleY(1);
        }
        h2{
            font-size: 30px;
        }
    } 

    @media only screen and (orientation: landscape) and (max-width: 800px){
        h2{
            font-size: 20px;
        }
    }
</style>