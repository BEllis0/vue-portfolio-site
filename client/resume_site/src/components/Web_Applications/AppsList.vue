<template>
<div>
    <div v-for="app in appItems" :key="app.id">
        <AppsItem v-bind:app="app" />
    </div>
</div>
</template>

<script>
import AppsItem from './AppsItem.vue';

export default {
    name: "AppsList",
    components: {
        AppsItem
    },
    data: () => ({
        appItems: [
            { id: 1, name: "Watchlists.io | Stock App", url_link: 'http://watchlists.io/', images: []}
        ]
    })
}
</script>

<style scoped>

</style>