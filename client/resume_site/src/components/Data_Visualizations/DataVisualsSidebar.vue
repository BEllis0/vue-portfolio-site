<template>
    <div class="sidebar">
        <h3 class="sidebar-title">Data Visualizations</h3>
        <div class="sidebar-data-visuals-items">
            <div v-for="visual in visuals" :key="visual.id">
                <a v-if="visual.anchor_link !== null" :href="`#${visual.anchor_link}`">
                    <h4 class="sidebar-data-visuals-item">{{ visual.name }}</h4>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DataVisualSidebar",
    data: () => ({
        visuals: [
            { id: 1, name: "Metro Denver Housing Resource Finder", anchor_link: 'resource_finder' },
            { id: 2, name: "Close to Home Pledge Supporters", anchor_link: 'pledge' },
            { id: 3, name: "Denver Metro Area Food Resources", anchor_link: 'food' },
            { id: 4, name: "Arts Community in Metro Denver", anchor_link: 'art' },
            { id: 5, name: "Cryptocurrencies", anchor_link: 'crypto' },
            { id: 6, name: "Bands I've Seen", anchor_link: 'bands' },
        ]
    })
}
</script>

<style scoped>
    .sidebar {
        padding: 10px 0px;
        padding-left: 20px;
    }

    .sidebar-title, .sidebar-data-visuals-item {
        border-bottom: 1px solid var(--light-blue);
    }

    .sidebar-data-visuals-item {
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