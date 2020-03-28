<template>
    <div class="banner">
        <Navbar />
        <h1>Brandon Ellis</h1>
        <h3>Web Developer | Digital Analyst</h3>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';

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
</style>