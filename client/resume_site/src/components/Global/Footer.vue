<template>
    <footer>
        <nav class="footer-nav">

            <!-- ===== DESKTOP MENU ===== -->

            <ul class="footer-list desktop-tablet">
                <!-- Home -->
                <router-link to="/"><li class="footer-item">Home</li></router-link>
                <!-- Resume on Cloudinary -->
                <a href="https://res.cloudinary.com/btdigital/image/upload/v1586214646/resume/Brandon_Ellis_Resume.pdf" target="_blank">
                    <li class="footer-item">Resume</li>
                </a>
                <!-- About section on home page -->
                <router-link to="#about"><li class="footer-item">About</li></router-link>
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
                <li @click="overlay = !overlay" class="footer-item">Contact</li>
            </ul>
            
            <!-- ===== MOBILE/TABLET MENU ===== -->

            <ul class="footer-list mobile">
                <div>
                <!-- Home -->
                <router-link to="/"><li class="footer-item">Home</li></router-link>
                <!-- Resume on Cloudinary -->
                <a href="https://res.cloudinary.com/btdigital/image/upload/v1586214646/resume/Brandon_Ellis_Resume.pdf" target="_blank">
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
                        <v-list-item v-for="(item, i) in items" :key="i">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                
                <li @click="overlay = !overlay" class="footer-item">Contact</li>
                </div>
            </ul>

            <!-- ===== CONTACT OVERLAY ===== -->

            <v-overlay :absolute="absolute" :value="overlay">
                <div class="contact-overlay">
                    <div class="contact-info-section">
                        <h3 class="remove-margin">Brandon Ellis</h3>
                        <p class="remove-margin">Web Development | Digital Marketing</p>
                        <a href="mailto:brandonellis.email@gmail.com?subject=Website Inquery" target="_blank">
                            <p class="remove-margin">brandonellis.email@gmail.com</p>
                        </a>

                        <p class="remove-margin">+1 (518) 354-3096</p>
                        <SocialIcons />
                        <p class="remove-margin">I am available for freelance projects and employment.</p>
                        <p>If you want to collaborate on designing a beautiful and effective website, or you're looking to add a creative problem solver to your development team, please feel free to reach out.</p>
                        <p class="remove-margin">Built with <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>
                        <br />
                        <p class="remove-margin">View the code on <a href="https://github.com/BEllis0/vue-portfolio-site" target="_blank">Github</a></p>
                    </div>
                    <v-btn color="#7aa3c1" class="hide-contact" @click="overlay = false">
                        Hide Contact Info
                    </v-btn>
                </div>
            </v-overlay>
        </nav>

        <div class="footer-copyright-section">
            <p class="remove-margin">Copyright © 2020 Brandon T. Ellis | BT Digital </p>
            <p class="remove-margin">Brandonellis.email@gmail.com</p>
            <p class="remove-margin">Built by Brandon Ellis with <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>
        </div>
    </footer>
</template>

<script>
import SocialIcons from './SocialIcons.vue';

export default {
    name: "Footer",
    components: {
        SocialIcons
    },
    data: () => ({
        absolute: true,
        overlay: false,
        items: [
            { title: 'Web Design', link: '/web-apps' },
            { title: 'Web Applications', link: '/web-apps' },
            { title: 'Data Visualization', link: '/web-apps' },
        ]
    })
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