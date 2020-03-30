<template>
    <div class="banner">
        <div class="title-container">
            <h1 class="name">Brandon Ellis</h1>
            <h3 class="public-tag">Web Developer</h3>
            <h3 class="developer-tag">const { frontend, backend, fullStack } = require('web_developer')</h3>
            <div>
                <button class="resumebtn">Resume</button>
                <button class="inquirebtn">Inquire</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "HomeBanner",
    components: {
        
    }
}
</script>

<style scoped>
    .banner {
        background-image: 
            linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(0,0,0, 0.73)),
            url("https://res.cloudinary.com/btdigital/image/upload/v1574379949/Malaysia-towers-abstract-color-2_lxpqeb.png");
        background-size: 100vw;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        max-width: 100%;
        height: auto;
        padding: 40px 0px;
    }

    .title-container {
        margin-top: 8%;
        /* margin-bottom: 3%; */
        color: white;
        text-align: center;
    }

    button {
        padding: 10px;
        font-size: 16px;
        border-radius: 50px 50px;
        margin: 5px 5px;
        font-weight: 650;
    }

    .resumebtn, .inquirebtn {
        background-color: rgba(255,255,255, 0.85);
        color: #7aa3c1;
    }

    .inquirebtn:hover, .resumebtn:hover {
        background-color: rgba(29,29,29, 0.8);
    }

    .name {
        font-size: 2.5em;
        margin: 0px;
    }

    .public-tag {
        display: initial;
        animation-name: public-tag-change;
        animation-duration: 5000ms;
        animation-timing-function: ease-in;
        animation-iteration-count: infinite;
        /* animation: public-tag-change 5s ease-in 1s infinite normal forwards; */
    }

    .developer-tag {
        display: none;
        /* animation: developer-tag-change 5s ease-in 1s infinite normal forwards; */
    }

    @keyframes public-tag-change {
        50% {
            display: none;
            visibility: hidden;
        }
        75% {
            display: initial;
            visibility: initial;
        }
    }

    /* @keyframes developer-tag-change {

    } */

    @media screen and (max-width: 1382px) and (min-width: 500px) {

        .title-container {
            margin-top: 5%;
        }

        .name {
            font-size: 1.7em;
        }

        button {
            padding: 10px;
            font-size: 14px;
        }
    }
</style>