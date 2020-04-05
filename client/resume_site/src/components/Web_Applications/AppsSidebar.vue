<template>
    <div class="sidebar">
        <h3 class="sidebar-title">Applications</h3>
        <div class="sidebar-application-items">
            <h4 v-for="app in applications" :key="app.id">
                {{ app.name }}
            </h4>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppsSidebar",
    data: () => ({
        applications: [
            { id: 1, name: "Watchlists.io | Stock App", url_link: 'http://watchlists.io/', anchor_link: '#watchlists' }
        ]
    })
}
</script>

<style scoped>
    .sidebar {
        padding: 10px 0px;
        padding-left: 20px;
    }

    .sidebar-title {
        border-bottom: 1px solid var(--light-blue);
    }
</style>