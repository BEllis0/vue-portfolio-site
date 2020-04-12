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
            { id: 1, name: "The Center for Women's Health Research", url_link: 'cwhr.org', anchor_link: 'cwhr' },
            { id: 2, name: "National Retail Concept Partners", url_link: 'nrcpartners.com', anchor_link: 'nrcp' },
            { id: 3, name: "Third Sector Communication Strategies", url_link: 'https://tscstrategies.com/', anchor_link: 'tscs' },
            { id: 4, name: "The Reciprocity Collective", url_link: 'reciprocitycollective.org', anchor_link: 'trc' },
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