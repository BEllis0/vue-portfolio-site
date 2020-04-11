<template>
    <div class="navbar">
        <nav>

            <!-- ===== DESKTOP MENU ===== -->

            <ul class="nav-list desktop">
                <!-- Home -->
                <router-link to="/"><li class="nav-item">Home</li></router-link>
                <!-- Resume on Cloudinary -->
                <a href="https://res.cloudinary.com/btdigital/image/upload/v1586214646/resume/Brandon_Ellis_Resume.pdf" target="_blank">
                    <li class="nav-item">Resume</li>
                </a>
                <!-- About section on home page -->
                <router-link to="/#about"><li class="nav-item">About</li></router-link>
                <!-- Dropdown menu for projects -->
                <v-menu transition="slide-y-transition" bottom>
                    <template v-slot:activator="{ on }">
                        <li v-on="on" class="nav-item">Projects & Samples</li>
                    </template>
                    <v-list>
                        <v-list-item :to="item.link" v-for="(item, i) in items" :key="i">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <!-- Contact - triggers event to display component -->
                <li @click="this.updateContact" class="nav-item">Contact</li>
            </ul>
            
            <!-- ===== MOBILE/TABLET MENU ===== -->

            <ul class="nav-list mobile-tablet">
                <div>
                <!-- Home -->
                <router-link to="/"><li class="nav-item">Home</li></router-link>
                <!-- Resume on Cloudinary -->
                <a href="https://res.cloudinary.com/btdigital/image/upload/v1586214646/resume/Brandon_Ellis_Resume.pdf" target="_blank">
                    <li class="nav-item">Resume</li>
                </a>
                <!-- About section on home page -->
                <router-link to="/#about"><li class="nav-item">About</li></router-link>
                </div>
                <div>
                <!-- Dropdown menu for projects -->
                <v-menu transition="slide-y-transition" bottom>
                    <template v-slot:activator="{ on }">
                        <li v-on="on" class="nav-item">Projects & Samples</li>
                    </template>
                    <v-list>
                        <v-list-item :to="item.link" v-for="(item, i) in items" :key="i">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <!-- Contact - triggers event to display component -->
                <li @click="this.updateContact" class="nav-item">Contact</li>
                </div>
            </ul>
        </nav>
    </div>
</template>

<script>

export default {
    name: "Navbar",
    props: ["updateContact", "page"],
    data: () => ({
        items: [
            { title: 'Web Design', link: '/web-designs' },
            { title: 'Web Applications', link: '/web-apps' },
            { title: 'Data Visualization', link: '/data-visualization' },
        ]
    }),
}
</script>

<style scoped>
    .navbar {
        width: 100%;
        padding: 20px 0px;
    }

    a {
        text-decoration: none;
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
            font-size: 16px;
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