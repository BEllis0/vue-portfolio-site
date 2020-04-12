<template>
    <div>
        <div class="main">
        <ContactOverlay
            :changeToFalse="this.changeToFalse"
            v-bind:over="this.over" 
        />
        <DataVisualsList  />
        </div>
    </div>
</template>

<script>
import DataVisualsList from './DataVisualsList.vue';
import ContactOverlay from '../Global/ContactOverlay.vue';


export default {
    name: "DataVisualsMain",
    components: {
        DataVisualsList,
        ContactOverlay
    },
    props: ["over", "changeToFalse"],
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