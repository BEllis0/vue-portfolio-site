<template>
    <footer>
        <div class="footer-nav">
            <ul class="footer-list">
                <li class="footer-item">Home</li>
                <li class="footer-item">Resume</li>
                <li class="footer-item">About</li>
                <li class="footer-item">Projects & Samples</li>
                <li class="footer-item">Services</li>
                <li class="footer-item">Contact</li>
            </ul>
        </div>
        <div class="footer-copyright-section">
            <p>Copyright © 2020 Brandon T. Ellis | BT Digital </p>
            <p>Brandonellis.email@gmail.com</p>
            <p>Built by Brandon Ellis with <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>
        </div>
    </footer>
</template>

<script>

export default {
    name: "Footer",
}
</script>

<style scoped>

    a {
        color: #7aa3c1;
    }

    .footer-nav {
        background-color: rgb(30,73,178);
    }

    .footer-list {
        list-style-type: none;
        display: flex;
        justify-content: space-evenly;
        margin: 0px;
        padding: 16px 5px;
    }

    .footer-item {
        color: rgb(38,133,230);
    }

    .footer-copyright-section {
        margin: 0px;
        padding: 5px 5px;
        color: rgb(150,152,150);
        background-color: black;
        display: flex;
        justify-content: space-evenly;
    }
</style>