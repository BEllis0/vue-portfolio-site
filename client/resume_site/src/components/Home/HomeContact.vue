<template>
    <div class="module">
        <div class="main-page-container">
            <h2 class="light-blue-text">CONTACT</h2>
            <div class="flex">
                <div class="left">
                    <h4 class="remove-margin">Brandon T. Ellis</h4>
                    <p class="remove-margin">Web Development | Digital Marketing</p>
                    <p class="remove-margin">brandonellis.email@gmail.com</p>
                    <p class="remove-margin">+1 (518) 354-3096</p>
                    <SocialIcons />
                </div>
                <div class="right">
                    <p>If you want to collaborate on designing a beautiful website, crafting effective content, or improving web conversions, feel free to reach out.</p>
                    <p>I am available for freelance projects and employment.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SocialIcons from '../Global/SocialIcons.vue';

export default {
    name: "HomeContact",
    components: {
        SocialIcons
    }
}
</script>

<style scoped>
    .module {
        background-color: rgb(232,233,232);
    }

    .left {
        width: 30%;
    }

    .right {
        width: 70%;
    }

    @media (max-width: 1065px) {
        .flex {
            flex-direction: column;
        }
        .left, .right {
            width: 90%;
        }
    }
</style>