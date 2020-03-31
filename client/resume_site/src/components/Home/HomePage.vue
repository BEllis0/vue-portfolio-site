<template>
    <div class="homePage">
        <HomeBanner />
        <HomeBio />
        <HomeProjects />
        <Footer />
    </div>
</template>

<script>
import HomeBanner from './HomeBanner';
import HomeBio from './HomeBio';
import Footer from '../Global/Footer.vue';
import HomeProjects from './HomeProjects.vue';

export default {
    name: "HomePage",
    components: {
        HomeBanner,
        HomeBio,
        HomeProjects,
        Footer
    }
}
</script>

<style scoped>

</style>