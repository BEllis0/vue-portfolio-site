<template>
    <div class="navbar">
        <nav>
            <ul class="nav-list desktop">
                <li class="nav-item">Home</li>
                <li class="nav-item">Resume</li>
                <li class="nav-item">About</li>
                <li class="nav-item">Projects & Samples</li>
                <li class="nav-item">Services</li>
                <li class="nav-item">Contact</li>
            </ul>
            <ul class="nav-list mobile-tablet">
                <div>
                <li class="nav-item">Home</li>
                <li class="nav-item">Resume</li>
                <li class="nav-item">About</li>
                </div>
                <div>
                <li class="nav-item">Projects & Samples</li>
                <li class="nav-item">Services</li>
                <li class="nav-item">Contact</li>
                </div>
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
        padding: 20px 0px;
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

    @media screen and (max-width: 850px) {
        .navbar {
            padding: 10px 0px;
        }

        .nav-list {
            justify-content: center;
            font-size: 14px;
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
</style>