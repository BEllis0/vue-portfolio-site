<template>
    <div class="sidebar">
        <h3 class="sidebar-title">Designs</h3>
        <div class="sidebar-design-items">
            <div v-for="design in designs" :key="design.id">
                <a v-if="design.anchor_link !== null" :href="`#${design.anchor_link}`">
                    <h4 class="sidebar-design-item">{{ design.name }}</h4>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DesignsSidebar",
    data: () => ({
        designs: [
            { id: 1, name: "The Center for Women's Health Research", url_link: 'http://watchlists.io/', anchor_link: 'watchlist' },
            { id: 2, name: "Amazon Prime Video Clone", url_link: 'https://amazon-review-service.herokuapp.com/', anchor_link: 'amazon' },
            { id: 3, name: "Weather App", url_link: 'https://bellis0.github.io/weather-app/', anchor_link: 'weather' },
            { id: 4, name: "Basic Image Editor", url_link: null, anchor_link: 'image-editor' },
        ]
    })
}
</script>

<style scoped>
    .sidebar {
        padding: 10px 0px;
        padding-left: 20px;
    }

    .sidebar-title, .sidebar-design-item {
        border-bottom: 1px solid var(--light-blue);
    }

    .sidebar-design-item {
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