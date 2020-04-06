<template>
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
</template>

<script>
import SocialIcons from './SocialIcons.vue';

export default {
    name: "ContactOverlay",
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
        margin: 0 auto;
        padding: 5px;
    }

    .hide-contact {
        background-color: #7aa3c1;
        margin: 0 auto;
        border-radius: 8px 8px 0 0;
    }

    @media screen and (max-width: 500px) {
        .contact-overlay {
            width: 90%;
        }
    }
</style>