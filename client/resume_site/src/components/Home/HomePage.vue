<template>
    <div class="homePage">
        <HomeBanner />
        <HomeBio />
        <HomeProjects />
        <HomeClients />
        <HomeTestimonials />
        <Footer />
    </div>
</template>

<script>
import HomeBanner from './HomeBanner';
import HomeBio from './HomeBio';
import Footer from '../Global/Footer.vue';
import HomeProjects from './HomeProjects.vue';
import HomeClients from './HomeClients.vue';
import HomeTestimonials from './HomeTestimonials.vue';

export default {
    name: "HomePage",
    components: {
        HomeBanner,
        HomeBio,
        HomeProjects,
        HomeClients,
        HomeTestimonials,
        Footer
    }
}
</script>

<style scoped>

</style>