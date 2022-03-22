<template>
<div>
    <div v-for="app in appItems" :key="app.id">
        <AppsItem v-bind:app="app" />
    </div>
</div>
</template>

<script>
import AppsItem from './AppsItem.vue';
import {appsList} from '../../assets/appsList.js';

export default {
    name: "AppsList",
    components: {
        AppsItem
    },
    data: () => ({
        appItems: appsList
    })
}
</script>

<style scoped>

</style>