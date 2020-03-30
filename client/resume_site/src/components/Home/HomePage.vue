<template>
    <div class="homePage">
        <HomeBanner />
        <HomeBio />
        <Footer />
    </div>
</template>

<script>
import HomeBanner from './HomeBanner';
import HomeBio from './HomeBio';
import Footer from '../Global/Footer.vue';

export default {
    name: "HomePage",
    components: {
        HomeBanner,
        HomeBio,
        Footer
    }
}
</script>

<style scoped>

</style>