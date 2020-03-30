<template>
    <div class="module">
        <div class="main-page-container">
            <Navbar />
            <div class="flex">
                <div>
                    <img class="headshot-img" alt="Headshot of Brandon Ellis" src="http://www.brandontellis.com/wp-content/uploads/2019/11/26017635.jpeg" />
                    <SocialIcons />
                </div>
                <div>
                    <h2>About Me</h2>
                    <h3>Web Developer | Digital Analyst</h3>
                    <p class="grey-text">Brandon is a web developer and digital marketing specialist currently self employed and working as a consultant for nonprofits and small businesses to develop and implement digital marketing strategies. His consulting business, BT Digital, focuses primarily on strategic communication, WordPress web development, digital marketing, social media, and project management. Brandon is passionate about technology and helping under-resourced groups build their capacity for growth.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../Global/Navbar.vue';
import SocialIcons from '../Global/SocialIcons.vue';

export default {
    name: "HomeBio",
    components: {
        SocialIcons,
        Navbar
    }
}
</script>

<style scoped>
    .module {
        background-color: black;
        color: white;
        width: 100%;
        height: auto;
        padding: 15px 0px;
    }

    .headshot-img {
        width: 120px;
        height: 120px;
        border-radius: 50% 50%;
    }

</style>