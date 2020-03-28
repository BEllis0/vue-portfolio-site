<template>
    <div class="navbar">
        <nav>
            <ul class="nav-list">
                <li class="nav-item">Home</li>
                <li class="nav-item">Resume</li>
                <li class="nav-item">About</li>
                <li class="nav-item">Projects & Samples</li>
                <li class="nav-item">Services</li>
                <li class="nav-item">Contact</li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
    .navbar {
        width: 100%;
    }

    .nav-list {
        display: flex;
        list-style-type: none;
        justify-content: flex-end;
        padding-right: 30px;
        font-size: 20px;
    }

    .nav-item {
        color: #7aa3c1;
        margin: 0px 10px;
    }
</style>