<template>
    <div class="social-icons">
        <a href="https://www.linkedin.com/in/brandon-t-ellis" target="_blank">
            <img class="linkedin icon" src="https://image.flaticon.com/icons/svg/145/145807.svg" />
        </a>
        <a href="https://www.youtube.com/channel/UCvxSwErbNJ_-ZvK1MqkBUug" target="_blank">
            <img class="youtube icon" src="https://image.flaticon.com/icons/svg/187/187209.svg" />
        </a>
        <a href="https://twitter.com/TravelAdvocate0" target="_blank">
            <img class="twitter icon" src="https://image.flaticon.com/icons/svg/145/145812.svg" />
        </a>
        <a href="https://www.facebook.com/brandon.ellis.505" target="_blank">
            <img class="facebook icon" src="https://image.flaticon.com/icons/svg/145/145802.svg" />
        </a>
    </div>
</template>

<script>
export default {
    name: "SocialIcons"
}
</script>

<style scoped>
    .icon {
        margin: 0px 2px;
    }

    .facebook, .linkedin, .twitter, .youtube {
        width: 25px;
        height: 25px;
    }
</style>