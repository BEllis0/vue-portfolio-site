<template>
    <div class="module testimonial-list">
        <div class="main-page-container">
            <h2 class="light-blue-text section-title">TESTIMONIALS</h2>
            <HomeTestimonialsItems />
        </div>
    </div>
</template>

<script>
import HomeTestimonialsItems from './HomeTestimonialsItems.vue';

export default {
    name: "HomeTestimonials",
    components: {
        HomeTestimonialsItems
    }
}
</script>

<style scoped>

    .module {
        background-image: 
            linear-gradient(
            rgba(223, 219, 219, 0.8),
            rgba(223, 219, 219, 0.8)
            ),
            url("https://res.cloudinary.com/btdigital/image/upload/v1550806968/Brussels-tower-44_ocilrv.jpg");
        background-repeat: no-repeat;
        background-size: 100vw;
    }
</style>