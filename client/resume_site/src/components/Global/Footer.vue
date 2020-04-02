<template>
    <footer>
        <div class="footer-nav">
            <ul class="footer-list desktop-tablet">
                <li class="footer-item">Home</li>
                <li class="footer-item">Resume</li>
                <li class="footer-item">About</li>
                <li class="footer-item">Projects & Samples</li>
                <!-- <li class="footer-item">Services</li> -->
                <li class="footer-item">Contact</li>
            </ul>
            <ul class="footer-list mobile">
                <div>
                    <li class="footer-item">Home</li>
                    <li class="footer-item">Resume</li>
                    <li class="footer-item">About</li>
                </div>
                <div>
                    <li class="footer-item">Projects & Samples</li>
                    <!-- <li class="footer-item">Services</li> -->
                    <li class="footer-item">Contact</li>
                </div>
            </ul>
        </div>
        <div class="footer-copyright-section">
            <p class="remove-margin">Copyright © 2020 Brandon T. Ellis | BT Digital </p>
            <p class="remove-margin">Brandonellis.email@gmail.com</p>
            <p class="remove-margin">Built by Brandon Ellis with <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>
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
        justify-content: center;
        margin: 0px;
        padding: 16px 5px;
    }

    .footer-item {
        color: rgb(38,133,230);
        margin: 0px 15px;
    }

    .footer-copyright-section {
        margin: 0px;
        padding: 5px 5px;
        color: rgb(150,152,150);
        background-color: black;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .mobile {
        display: none;
    }

    @media (max-width: 960px) {
        .footer-copyright-section {
            flex-direction: column;
            justify-content: center;
            align-content: center;
            padding: 10px 0px;
        }
    }

    @media (max-width: 500px) {

        .mobile {
            display: flex;
        }

        .desktop-tablet {
            display: none;
        }
    }
</style>