<template>
    <div class="main">
        <AppsList />
        <div class="test"></div>
        <div class="test"></div>
        <div class="test"></div>
        <div class="test"></div>
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
    .test {
        width: 50%;
        height: 600px;
    }
</style>