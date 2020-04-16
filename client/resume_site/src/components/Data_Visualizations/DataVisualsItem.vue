<template>
    <section class="data-visual-item" :id="visual.anchor_link">
        <div>
            <h1>{{ visual.name }}</h1>
        </div>
        <!-- render conditionally if website link is included -->
        <div v-if="visual.url_link !== null">
            <a :href="`${visual.url_link}`" target="_blank">
                <button class="website-btn" >View on Tableau Public</button>
            </a>
        </div>
        
        <h3>Details</h3>
        <p class="details-section">{{ visual.details }}</p>
        <h3>Data Visualization</h3>
        <img class="data-viz-image" :src="visual.viz.url" :alt="visual.viz.alt" />
    </section>
</template>

<script>


export default {
    name: "DataVisualsItem",
    props: ["visual"],
    components: {
        
    }
}
</script>

<style scoped>

    .data-visuals-image {
        width: 250px;
        height: auto;
        margin: 0px 5px;
    }

    .flex {
        align-items: center;
        justify-content: space-between;
    }

    .data-visual-item {
        margin: 30px 0px;
        padding: 10px 0px;
        border-bottom: 1px solid var(--light-blue);
    }

    .website-btn {
        color: var(--light-blue);
        border: 2px solid var(--light-blue);
        background-color: transparent;
        padding: 10px;
        width: auto;
        font-size: 16px;
        font-weight: 650;
        border-radius: 5px;
    }

    .github {
        width: 30px;
        height: 30px;
    }

    .data-viz-image {
        width: 100%;
    }

    @media screen and (max-width: 500px) {
        .website-btn {
            margin-left: 30%;
        }
    }

</style>