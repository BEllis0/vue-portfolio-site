<template>
    <div>
        <div class="main">
        <AppsList />
        </div>
    </div>
</template>

<script>
import AppsList from './AppsList.vue';

export default {
    name: "AppsMain",
    components: {
        AppsList
    }
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