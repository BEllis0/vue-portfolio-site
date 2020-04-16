<template>
    <section class="app-item" :id="app.anchor_link">
        <div class="flex">
            <div class="flex">
                <h1>{{ app.name }}</h1>
                <a :href="`${app.github}`" target="_blank">
                    <img class="github icon" src="https://cdn4.iconfinder.com/data/icons/bettericons/354/github-circle-512.png" />
                </a>
            </div>
            <div class="tech-icon-section" >
                <div v-for="image in app.technologies" :key="image.id" >
                    <img class="technology-icon" v-lazy="image.img_link" />
                </div>
            </div>
        </div>
        <!-- render conditionally if website link is included -->
        <div v-if="app.url_link !== null">
            <a :href="`${app.url_link}`" target="_blank">
                <button class="website-btn" >View Website</button>
            </a>
        </div>
        
        <h4>Details</h4>
        <p class="details-section">{{ app.details }}</p>
        <h4>Dependencies</h4>
        <p class="details-section">{{ app.dependencies }}</p>
        <h4>Images</h4>
        <div class="image-section">
            <div v-for="image in app.images" :key="image.id">
                <img class="app-image" :src="image.link" />
            </div>
        </div>
    </section>
</template>

<script>
// import LightBox from 'vue-image-lightbox';

export default {
    name: "AppsItem",
    props: ["app"],
    components: {
        // LightBox 
    }
}
</script>

<style scoped>
    .image-section {
        display: flex;
        flex-wrap: wrap;
    }

    .app-image {
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

    .app-item {
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