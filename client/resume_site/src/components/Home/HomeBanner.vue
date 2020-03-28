<template>
    <div class="banner">
        <Navbar />
        <h1 class="name">Brandon Ellis</h1>
        <h3>Web Developer | Digital Analyst</h3>
        <div>
            <button>Resume</button>
            <button>Inquire</button>
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
        background-image: url("https://res.cloudinary.com/btdigital/image/upload/v1574379949/Malaysia-towers-abstract-color-2_lxpqeb.png");
        background-size: 100vw;
        background-repeat: no-repeat;
        width: 100%;
        max-width: 100%;
        height: 700px;
    }

    button {
        padding: 10px;
        font-size: 16px;
        border-radius: 50px 50px;
        margin: 0px 5px;
    }

    .name {
        font-size: 2.5em;
        margin: 0px;
    }
</style>