<template>
    <div>
        <main class="main">
            <ContactOverlay 
                :changeToFalse="this.changeToFalse"
                v-bind:over="this.over" 
            />
            <AppsList />
        </main>
    </div>
</template>

<script>
import AppsList from './AppsList.vue';
import ContactOverlay from '../Global/ContactOverlay.vue';

export default {
    name: "AppsMain",
    components: {
        AppsList,
        ContactOverlay
    },
    props: ["over", "changeToFalse"]
}
</script>

<style scoped>

    .main {
        padding: 5px 50px 5px 0px;
    }

    @media screen and (max-width: 500px) {
        .main {
            padding: 5px 0px;
        }
    }
</style>