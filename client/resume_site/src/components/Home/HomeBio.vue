<template>
    <div class="module">
        <div class="main-page-container">
            <Navbar />
            <div class="flex">
                <section>
                    <img class="headshot-img" alt="Headshot of Brandon Ellis" src="http://www.brandontellis.com/wp-content/uploads/2019/11/26017635.jpeg" />
                    <SocialIcons />
                </section>
                <section>
                    <h2>About Me</h2>
                    <h3>Web Developer | Digital Analyst</h3>
                    <p class="grey-text">I am a full stack web developer with a background at the crossroads of web development and digital marketing. After receiving formal training at Hack Reactor (at Galvenize), I am eager to make a full transition into the world of software development. Though I am a recent graduate of Hack Reactor, the introduction to ‘coder’s high’ began a few years ago after discovering development and building my own consulting business, BT Digital, where I’ve focused on building websites and online presence for small nonprofits and businesses. I am passionate about technology and helping under-resourced groups build their capacity for growth.</p>
                    <br />
                    <p class="grey-text">Outside of web development and digital marketing, I’ve had the pleasure of providing logistical and on-site support for – and presented independent research at – international academic conferences in Malaysia, Hungary, and multiple locations in China.</p>
                    <br />
                    <p class="grey-text">Though my experience is currently within the nonprofit sector, I am actively seeking creative opportunities in organizations/companies that offer the chance to grow and make an impact. </p>
                </section>
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