<template>
    <footer>
        <nav class="footer-nav">

            <!-- ===== DESKTOP MENU ===== -->

            <ul class="footer-list desktop-tablet">
                <!-- Home -->
                <router-link to="/"><li class="footer-item">Home</li></router-link>
                <!-- Resume on Cloudinary -->
                <a href="https://res.cloudinary.com/btdigital/image/upload/v1588362005/resume/Brandon_Ellis_Resume.pdf" target="_blank">
                    <li class="footer-item">Resume</li>
                </a>
                <!-- About section on home page -->
                <router-link to="/#about"><li class="footer-item">About</li></router-link>
                <!-- Dropdown menu for projects -->
                <v-menu transition="slide-y-transition" bottom>
                    <template v-slot:activator="{ on }">
                        <li v-on="on" class="footer-item">Projects & Samples</li>
                    </template>
                    <v-list>
                        <v-list-item :to="item.link" v-for="(item, i) in items" :key="i">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <!-- Contact - triggers event to display component -->
                <li @click="updateContact" class="footer-item contact-link">Contact</li>
            </ul>
            
            <!-- ===== MOBILE/TABLET MENU ===== -->

            <ul class="footer-list mobile">
                <div>
                <!-- Home -->
                <router-link to="/"><li class="footer-item">Home</li></router-link>
                <!-- Resume on Cloudinary -->
                <a href="https://res.cloudinary.com/btdigital/image/upload/v1588362005/resume/Brandon_Ellis_Resume.pdf" target="_blank">
                    <li class="footer-item">Resume</li>
                </a>
                <!-- About section on home page -->
                <router-link to="/#about"><li class="footer-item">About</li></router-link>
                </div>
                <div>
                <!-- Dropdown menu for projects -->
                <v-menu transition="slide-y-transition" bottom>
                    <template v-slot:activator="{ on }">
                        <li v-on="on" class="footer-item">Projects & Samples</li>
                    </template>
                    <v-list>
                        <v-list-item :to="item.link" v-for="(item, i) in items" :key="i">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                
                <!-- Contact - triggers event to display component -->
                <li @click="updateContact" class="footer-item contact-link">Contact</li>
                </div>
            </ul>
        </nav>

        <div class="footer-copyright-section">
            <p class="remove-margin">Copyright © {{ new Date().getFullYear() }} Brandon T. Ellis | BT Digital </p>
            <p class="remove-margin">Brandonellis.email@gmail.com</p>
            <p class="remove-margin">Built by Brandon Ellis with <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>
        </div>
    </footer>
</template>

<script>

export default {
    name: "Footer",
    props: {
        updateContact: { type: Function }
    },
    data: () => ({
        items: [
            { title: 'Web Design', link: '/web-designs' },
            { title: 'Web Applications', link: '/web-apps' },
            { title: 'Data Visualization', link: '/data-visualization' },
        ]
    }),
    methods: {
        getYear: function() {
            return new Date().getFullYear();
        }
    }
}
</script>

<style scoped>

    a {
        color: #7aa3c1;
        text-decoration: none;
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