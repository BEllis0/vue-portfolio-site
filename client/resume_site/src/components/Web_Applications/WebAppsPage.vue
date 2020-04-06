<template>
    <div class="webAppsPage">
        <div class="nav-section">
            <div class="header flex">
                <h1 class="page-title">Projects & Samples</h1>
                <div class="navbar-section">
                    <Navbar />
                </div>
            </div>
        </div>
        <section class="body flex">
            <AppsSidebar class="webAppsSidebar" />
            <AppsMain class="webAppsMain" />
        </section>
        <Footer class="footer" />
    </div>
</template>

<script>
import Navbar from '../Global/Navbar.vue';
import AppsSidebar from './AppsSidebar.vue';
import AppsMain from './AppsMain.vue';
import Footer from '../Global/Footer.vue';

export default {
    name: "WebAppsPage",
    components: {
        Navbar,
        AppsMain,
        AppsSidebar,
        Footer
    }
}
</script>

<style scoped>

    .body {
        position: relative;
        top: 100px;
    }

    .nav-section {
        position: fixed;
        width: 100%;
        display: flex;
        padding: 0px 20px;
        background-color: white;
        z-index: 9999;
        border-bottom: 1px solid var(--light-blue);
    }

    .header {
        align-items: center;
    }

    .navbar {
        padding-bottom: 0px;
    }

    .webAppsPage {
        background-color: white;
        width: 100vw;
    }

    .webAppsSidebar {
        width: 25%;
        position: fixed;
    }

    .webAppsMain {
        width: 70%;
        position: relative;
        left: 30%;
    }

    .footer {
        position: relative;
        top: 100px;
    }

    @media (max-width: 500px) {
        .webAppsSidebar {
            position: static;
            width: 90%;
            left: 0;
            padding: 0;
        }

        .webAppsMain {
            width: 90%;
            left: 0px;
            position: static;
        }

        .nav-section {
            position: static;
            padding: 0px;
            justify-content: center;
        }

        .flex {
            display: block;
        }

        .body {
            top: 0px;
        }

        .page-title {
            margin-bottom: 0px;
            font-size: 22px;
    }
    }
</style>