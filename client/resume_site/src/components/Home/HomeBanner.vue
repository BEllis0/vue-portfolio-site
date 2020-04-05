<template>
    <div class="banner">
        <div class="title-container">
            <h1 class="name">Brandon Ellis</h1>
            <h3 class="public-tag">Web Developer</h3>
            <h3 class="developer-tag">const { frontend, backend, fullStack } = require('web_developer')</h3>
            <div>
                <a target="_blank" href="https://res.cloudinary.com/btdigital/image/upload/v1585928267/resume/Brandon_Ellis_-_Resume_-_4-1-20.pdf">
                    <button class="resumebtn">Resume</button>
                </a>
                <button class="inquirebtn" @click="overlay = !overlay" >Inquire</button>
            </div>
        </div>
        <BrandonShamelessPlug />
        
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
    </div>
</template>

<script>
import BrandonShamelessPlug from '../Global/BrandonShamelessPlug.vue';
import SocialIcons from '../Global/SocialIcons.vue';

export default {
    name: "HomeBanner",
    components: {
        BrandonShamelessPlug,
        SocialIcons
    },
    data: () => ({
        absolute: true,
        overlay: false
    })
}
</script>

<style scoped>
    .banner {
        background-image: 
            linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(0,0,0, 0.73)),
            url("https://res.cloudinary.com/btdigital/image/upload/v1574379949/Malaysia-towers-abstract-color-2_lxpqeb.png");
        background-size: 100vw;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        max-width: 100%;
        height: auto;
        padding: 40px 0px;
        /* padding-bottom: 80px; */
    }

    .title-container {
        margin-top: 8%;
        /* margin-bottom: 3%; */
        color: white;
        text-align: center;
    }

    button {
        padding: 10px;
        font-size: 16px;
        border-radius: 50px 50px;
        margin: 15px 5px;
        font-weight: 650;
    }

    .resumebtn, .inquirebtn {
        background-color: rgba(255,255,255, 0.85);
        color: #7aa3c1;
    }

    .inquirebtn:hover, .resumebtn:hover {
        background-color: rgba(29,29,29, 0.8);
    }

    .name {
        font-size: 2.5em;
        margin: 0px;
    }

    .public-tag {
        animation-name: publicTagChange;
        animation-duration: 7s;
        animation-timing-function: ease-in;
        animation-iteration-count: infinite;
    }

    .developer-tag {
        opacity: 0;
        animation-name: developerTagChange;
        animation-duration: 7s;
        animation-timing-function: ease-in;
        animation-iteration-count: infinite;
        position: relative;
        top: -23px;
    }

    /* ANIMATIONS */

    @keyframes publicTagChange {
        0% {
            opacity: 1;
            transform: initial;
        }
        35% {
            opacity: 1;
            transform: initial;
        }
        40% {
            transform: translateY(25%);
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        75% {
            opacity: 0;
        }
        90% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

     @keyframes developerTagChange {
        0% {
           opacity: 0;
        }
        40% {
            opacity: 0;
        }
        45% {
           opacity: 1;
           transform: initial;
        }
        75% {
           opacity: 1;
           transform: initial;
        }
        78% {
            transform: translateY(25%);
        }
        80% {
            opacity: 0;
        }
        85% {
            opacity: 0;
            
        }
        100% {
            opacity: 0;
        }
    }

    /* MEDIA QUERIES */

    @media screen and (max-width: 1382px) and (min-width: 500px) {

        .title-container {
            margin-top: 5%;
        }

        .name {
            font-size: 1.7em;
        }

        button {
            padding: 10px;
            font-size: 14px;
        }
    }

    @media (max-width: 500px) {
        .title-container {
            margin-top: 0px;
        }

        .banner {
            padding-top: 0px;
        }

        .developer-tag, .public-tag {
            margin: 0px;
        }
    }
</style>