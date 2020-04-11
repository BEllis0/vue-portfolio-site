<template>
    <div class="dataVisualsPage">
        <div class="nav-section">
            <div class="header flex">
                <h1 class="page-title">Projects & Samples</h1>
                <div class="navbar-section">
                    <Navbar 
                        :updateContact="updateContact"
                        :page="page"
                    />
                </div>
            </div>
        </div>
        <section class="body flex">
            <DataVisualsSidebar class="dataVisualsSidebar" />

            <DataVisualsMain
                v-bind:over="over"
                v-bind:page="page"
                :changeToFalse="changeToFalse"
                class="dataVisualsMain"
            />

        </section>
        <Footer
            :updateContact="updateContact"
            class="footer"
        />
    </div>
</template>

<script>
import Navbar from '../Global/Navbar.vue';
import DataVisualsSidebar from './DataVisualsSidebar.vue';
import DataVisualsMain from './DataVisualsMain.vue';
import Footer from '../Global/Footer.vue';

export default {
    name: "dataVisualsPage",
    components: {
        Navbar,
        DataVisualsMain,
        DataVisualsSidebar,
        Footer
    },
    data: () => ({
            page: 'data visuals',
            over: false
    }),
    methods: {
        //change overlay to true
        updateContact() {
            console.log('data visuals page');
            this.over = true
        },
        //change overlay to false
        changeToFalse() {
            this.over = false;
        }
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

    .dataVisualsPage {
        background-color: white;
        width: 100vw;
    }

    .dataVisualsSidebar {
        width: 25%;
        position: fixed;
    }

    .dataVisualsMain {
        width: 70%;
        position: relative;
        left: 30%;
    }

    .footer {
        position: relative;
        top: 100px;
    }

    @media (max-width: 500px) {
        .dataVisualsSidebar {
            position: static;
            width: 90%;
            left: 0;
            padding: 0;
        }

        .dataVisualsMain {
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