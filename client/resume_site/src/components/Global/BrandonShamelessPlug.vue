<template>
    <div class="container">
        <div class="plug">
            <div class="remove-margin">
            <p class="remove-margin">Built with <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>
            <br />
            <p class="remove-margin">View the code on <a href="https://github.com/BEllis0/vue-portfolio-site" target="_blank">Github</a></p>
            </div>
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