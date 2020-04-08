<template>
    <div class="homePage">
        <HomeBanner 
            :updateContact="updateContact" 
        />
        <HomeBio
            :changeToFalse="changeToFalse" 
            :updateContact="updateContact" 
            v-bind:page="page"
            v-bind:over="over"
        />
        <HomeProjects />
        <HomeClients />
        <HomeTestimonials />
        <HomeContact />
        <Footer :updateContact="updateContact" />
    </div>
</template>

<script>
import HomeBanner from './HomeBanner';
import HomeBio from './HomeBio';
import Footer from '../Global/Footer.vue';
import HomeProjects from './HomeProjects.vue';
import HomeClients from './HomeClients.vue';
import HomeTestimonials from './HomeTestimonials.vue';
import HomeContact from './HomeContact.vue';

export default {
    name: "HomePage",
    components: {
        HomeBanner,
        HomeBio,
        HomeProjects,
        HomeClients,
        HomeTestimonials,
        HomeContact,
        Footer
    },
    data: () => ({
            page: 'Home',
            over: false
    }),
    methods: {
        //change overlay to true
        updateContact: function() {
            this.over = true
        },
        //change overlay to false
        changeToFalse: function() {
            this.over = false;
        }
    }
}
</script>

<style scoped>

</style>