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
            { id: 1, name: "The Center for Women's Health Research", url_link: 'cwhr.org', anchor_link: 'cwhr' },
            { id: 2, name: "National Retail Concept Partners", url_link: 'nrcpartners.com', anchor_link: 'nrcp' },
            { id: 3, name: "Third Sector Communication Strategies", url_link: 'https://tscstrategies.com/', anchor_link: 'tscs' },
            { id: 4, name: "Cry Without Tears", url_link: 'crywithouttears.org', anchor_link: 'cwt' },
            { id: 5, name: "Close to Home CO", url_link: 'closetohomeco.org', anchor_link: 'cth' },
            { id: 6, name: "The Reciprocity Collective", url_link: 'reciprocitycollective.org', anchor_link: 'reciprocity' },
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