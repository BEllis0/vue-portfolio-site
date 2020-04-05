<template>
    <div class="navbar">
        <nav>
            <ul class="nav-list desktop">
                <li class="nav-item">Home</li>
                <li class="nav-item">Resume</li>
                <router-link to="#about"><li class="nav-item">About</li></router-link>
                <li class="nav-item">Projects & Samples</li>
                <li @click="overlay = !overlay" class="nav-item">Contact</li>
                
                
            </ul>
            <ul class="nav-list mobile-tablet">
                <div>
                <li class="nav-item">Home</li>
                <li class="nav-item">Resume</li>
                <li class="nav-item">About</li>
                </div>
                <div>
                <li class="nav-item">Projects & Samples</li>
                <li @click="overlay = !overlay" class="nav-item">Contact</li>
                </div>
            </ul>

            <!-- Show on contact click -->
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
                            <p>If you want to collaborate on designing a beautiful and effective website, or you're looking to add a creative problem solver to your development team, please reach out! feel free to reach out.</p>
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


export default {
    name: "Navbar",
    components: {
        SocialIcons
    },
    data: () => ({
        absolute: true,
        overlay: false
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

    .contact-overlay {
        background-color: white;
        display: flex;
        flex-direction: column;
        color: black;
        width: 500px;
        height: auto;
        border-radius: 10px;
        margin: 0 auto;
        -moz-box-shadow:    inset 0 0 10px #000000;
        -webkit-box-shadow: inset 0 0 10px #000000;
        box-shadow:         inset -8px -8px 0 #7aa3c1;
    }

    .contact-info-section {
        width: 90%;
        /* text-align: center; */
        margin: 0 auto;
        padding: 5px;
    }

    .hide-contact {
        background-color: #7aa3c1;
        margin: 0 auto;
        border-radius: 8px 8px 0 0;
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

    @media screen and (max-width: 500px) {
        .contact-overlay {
            width: 90%;
        }
    }
</style>