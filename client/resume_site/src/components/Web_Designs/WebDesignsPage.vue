<template>
    <div class="webDesignsPage">
        <div class="nav-section">
            <div class="header flex">
                <h1 class="page-title">Projects & Samples</h1>
                <div class="navbar-section">
                    <Navbar />
                </div>
            </div>
        </div>
        <section class="body flex">
            <DesignsSidebar class="webDesignsSidebar" />
            <DesignsMain class="webDesignsMain" />
        </section>
        <Footer class="footer" />
    </div>
</template>

<script>
import Navbar from '../Global/Navbar.vue';
import DesignsSidebar from './DesignsSidebar.vue';
import DesignsMain from './DesignsMain.vue';
import Footer from '../Global/Footer.vue';

export default {
    name: "WebDesignsPage",
    components: {
        Navbar,
        DesignsMain,
        DesignsSidebar,
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

    .webDesignsPage {
        background-color: white;
        width: 100vw;
    }

    .webDesignsSidebar {
        width: 25%;
        position: fixed;
    }

    .webDesignsMain {
        width: 70%;
        position: relative;
        left: 30%;
    }

    .footer {
        position: relative;
        top: 100px;
    }

    @media (max-width: 500px) {
        .webDesignsSidebar {
            position: static;
            width: 90%;
            left: 0;
            padding: 0;
        }

        .webDesignsMain {
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