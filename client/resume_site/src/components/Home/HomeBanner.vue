<template>
    <div class="banner">
        <Navbar />
        <div class="title-container">
            <h1 class="name">Brandon Ellis</h1>
            <h3>const { frontend, backend, fullStack } = require('web_developer')</h3>
            <div>
                <button class="resumebtn">Resume</button>
                <button class="inquirebtn">Inquire</button>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../Global/Navbar.vue';

export default {
    name: "HomeBanner",
    components: {
        Navbar
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
        height: 700px;
    }

    .title-container {
        margin-top: 10%;
        color: white;
        text-align: center;
    }

    button {
        padding: 20px;
        font-size: 16px;
        border-radius: 50px 50px;
        margin: 5px 5px;
        font-weight: 650;
    }

    .resumebtn {
        background-color: white;
        color: #7aa3c1;
    }

    .inquirebtn {
        background-color: rgba(29,29,29, 0.6);
        color: white;
    }

    .name {
        font-size: 2.5em;
        margin: 0px;
    }
</style>