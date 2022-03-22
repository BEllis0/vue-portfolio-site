<template>
    <div class="sidebar">
        <h3 class="sidebar-title">Applications</h3>
        <div class="sidebar-application-items">
            <div v-for="app in applications" :key="app.id">
                <a v-if="app.anchor_link !== null" :href="`#${app.anchor_link}`">
                    <h4 class="sidebar-app-item">{{ app.name }}</h4>
                </a>
            </div>
        </div>
        <div class="github-link">
            <a href="https://github.com/BEllis0/" target="_blank">
                <h3>Github</h3>
            </a>
            <a href="https://github.com/BEllis0" target="_blank">
                <img class="github icon" src="https://cdn4.iconfinder.com/data/icons/bettericons/354/github-circle-512.png" />
            </a>
        </div>
    </div>
</template>

<script>
import {appsList} from '../../assets/appsList.js';
console.log('appsList', appsList)
export default {
    name: "AppsSidebar",
    data: () => ({
        applications: appsList
    })
}
</script>

<style scoped>
    .sidebar {
        padding: 10px 0px;
        padding-left: 20px;
    }

    .sidebar-title, .sidebar-app-item {
        border-bottom: 1px solid var(--light-blue);
    }

    .sidebar-app-item {
        padding: 3px;
    }

    .github-link {
        display: flex;
        align-items: center;
    }

    .github {
        width: 50px;
        height: 50px;
    }

</style>