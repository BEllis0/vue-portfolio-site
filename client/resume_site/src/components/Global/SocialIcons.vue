<template>
    <div class="social-icons">
        <a href="https://github.com/BEllis0" target="_blank">
            <img class="github icon" src="https://cdn4.iconfinder.com/data/icons/bettericons/354/github-circle-512.png" />
        </a>
        <a href="https://www.linkedin.com/in/brandon-t-ellis" target="_blank">
            <img class="linkedin icon" src="https://res.cloudinary.com/btdigital/image/upload/v1647571574/LinkedIn_icon_circle.png" />
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

    .facebook, .linkedin, .twitter, .youtube, .github {
        width: 25px;
        height: 25px;
    }
</style>