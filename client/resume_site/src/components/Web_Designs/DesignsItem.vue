<template>
    <section class="design-item" :id="design.anchor_link">
        <div>
            <h1>{{ design.name }}</h1>
        </div>
        <!-- render conditionally if website link is included -->
        <div v-if="design.url_link !== null">
            <a :href="`${design.url_link}`" target="_blank">
                <button class="website-btn" >View Website</button>
            </a>
        </div>
        
        <h3>Details</h3>
        <p class="details-section">{{ design.details }}</p>
        <h3>Images</h3>
        <div class="image-section">
            <div v-for="image in design.images" :key="image.id">
                <img class="design-image" v-lazy="image.link" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "DesignsItem",
    props: ["design"]
}
</script>

<style scoped>
    .image-section {
        display: flex;
        flex-wrap: wrap;
    }

    .design-image {
        width: 250px;
        height: auto;
        margin: 0px 5px;
    }
    .tech-icon-section {
        display: flex;
        /* margin: 5px 0px; */
    }

    .technology-icon {
        max-width: 30px;
        margin: 0 5px;
    }

    .flex {
        align-items: center;
        justify-content: space-between;
    }

    .design-item {
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

    @media screen and (max-width: 500px) {
        .website-btn {
            margin-left: 30%;
        }
    }

</style>