<template>
    <div>
        <h1>{{ app.name }}</h1>
        <h4>Details</h4>
        <p>{{ app.details }}</p>
        <h4>Dependencies</h4>
        <p>{{ app.dependencies }}</p>
        <div class="image-section">
            <div v-for="image in app.images" :key="image.link">
                <img class="app-image" :src="image.link" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppsItem",
    props: ["app"]
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
</style>