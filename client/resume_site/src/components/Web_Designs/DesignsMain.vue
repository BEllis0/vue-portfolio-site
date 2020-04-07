<template>
    <div>
        <div class="main">
        <DesignsList />
        </div>
    </div>
</template>

<script>
import DesignsList from './DesignsList.vue';

export default {
    name: "DesignsMain",
    components: {
        DesignsList
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