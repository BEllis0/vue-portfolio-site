<template>
    <div class="navbar">
        <nav>

            <!-- ===== DESKTOP MENU ===== -->

            <ul class="nav-list desktop">
                <!-- Home -->
                <router-link to="/"><li class="nav-item">Home</li></router-link>
                <!-- Resume on Cloudinary -->
                <a href="https://res.cloudinary.com/btdigital/image/upload/v1585928267/resume/Brandon_Ellis_-_Resume_-_4-1-20.pdf" target="_blank">
                    <li class="nav-item">Resume</li>
                </a>
                <!-- About section on home page -->
                <router-link to="#about"><li class="nav-item">About</li></router-link>
                <!-- Dropdown menu for projects -->
                <v-menu transition="slide-y-transition" bottom>
                    <template v-slot:activator="{ on }">
                        <li v-on="on" class="nav-item">Projects & Samples</li>
                    </template>
                    <v-list>
                        <v-list-item :to="item.link" v-for="(item, i) in items" :key="i">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <li @click="overlay = !overlay" class="nav-item">Contact</li>
            </ul>
            
            <!-- ===== MOBILE/TABLET MENU ===== -->

            <ul class="nav-list mobile-tablet">
                <div>
                <!-- Home -->
                <router-link to="/"><li class="nav-item">Home</li></router-link>
                <!-- Resume on Cloudinary -->
                <a href="https://res.cloudinary.com/btdigital/image/upload/v1585928267/resume/Brandon_Ellis_-_Resume_-_4-1-20.pdf" target="_blank">
                    <li class="nav-item">Resume</li>
                </a>
                <!-- About section on home page -->
                <router-link to="#about"><li class="nav-item">About</li></router-link>
                </div>
                <div>
                <!-- Dropdown menu for projects -->
                <v-menu transition="slide-y-transition" bottom>
                    <template v-slot:activator="{ on }">
                        <li v-on="on" class="nav-item">Projects & Samples</li>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, i) in items" :key="i">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                
                <li @click="overlay = !overlay" class="nav-item">Contact</li>
                </div>
            </ul>

            <!-- ===== CONTACT OVERLAY ===== -->

            <!-- <ContactOverlay
                absolute=true,
                overlay=false
             /> -->
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
                        <p class="remove-margin right-align">Built with <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>
                        <p class="remove-margin right-align">View the code on <a href="https://github.com/BEllis0/vue-portfolio-site" target="_blank">Github</a></p>
                    </div>
                    <v-btn color="#7aa3c1" class="hide-contact" @click="overlay = false">
                        Hide Contact Info
                    </v-btn>
                </div>
            </v-overlay>
        </nav>
    </div>
</template>

<script>
import SocialIcons from './SocialIcons.vue';
// import ContactOverlay from './ContactOverlay.vue';

export default {
    name: "Navbar",
    components: {
        SocialIcons
        // ContactOverlay
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
    .navbar {
        width: 100%;
        padding: 20px 0px;
    }

    a {
        text-decoration: none;
    }

    .nav-list {
        display: flex;
        list-style-type: none;
        justify-content: flex-end;
        padding-right: 30px;
        font-size: 20px;
        margin-top: 0px;
        padding: 5px;
    }

    .mobile-tablet {
        visibility: hidden;
        display: none;
    }

    .desktop {
        visibility: initial;
    }

    .nav-item:hover {
        border-bottom: 1px solid #7aa3c1;
        font-weight: 650;
    }

    .nav-item {
        color: #7aa3c1;
        margin: 0px 10px;
    }

    @media screen and (max-width: 850px) {
        .navbar {
            padding: 10px 0px;
        }

        .nav-list {
            justify-content: center;
            font-size: 16px;
            padding-right: 0px; 
        }

        .mobile-tablet {
            visibility: initial;
            display: flex;
        }

        .desktop {
            visibility: hidden;
            display: none;
        }
    }
</style>