<template>
    <div class="container">
        <div class="plug">
            <p>Built by Brandon Ellis with <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "BrandonShamelessPlug"
}
</script>

<style scoped>
    .container {
        width: 80%;
        margin: 0 auto;
    }

    .plug {
        color: white;
        display: flex;
        justify-content: flex-end;
        text-align: center;
    }
</style>