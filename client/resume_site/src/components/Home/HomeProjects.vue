<template>
    <div class="module">
        <div class="main-page-container">
            <h2 class="light-blue-text h2 section-title">PROJECTS & SAMPLES</h2>
            <div class="flex project-list">
                <router-link to="/web-designs" class="project-item blurb-blue" >
                    <div>
                        <img class="project-icon" src="https://res.cloudinary.com/btdigital/image/upload/v1647572325/web-design-icon-png-3.png" />
                        <h3 class="project-title">Web Design</h3>
                    </div>
                </router-link>
                <router-link to="/web-apps" class="project-item blurb-blue" >
                    <div>
                        <img class="project-icon" src="https://res.cloudinary.com/btdigital/image/upload/v1647572538/architecture_icon.png" />
                        <h3 class="project-title">Web Applications</h3>
                    </div>
                </router-link>
                <router-link to="/data-visualization" class="project-item blurb-blue" >
                    <div>
                        <img class="project-icon" src="https://res.cloudinary.com/btdigital/image/upload/v1647572247/data_viz_icon.png" />
                        <h3 class="project-title">Data Visualizations</h3>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeProjects"    
}
</script>

<style scoped>
    .h2 {
        margin: 0px;
        padding: 10px 0px;
    }

    a {
        color: white;
        text-decoration: none;
    }

    .project-item:hover {
        color: black !important;
    }

    .project-title {
        text-align: center;
    }
    
    .project-list {
        width: 100%;
        height: auto;
        padding: 40px 0px;
        justify-content: center;
    }

    .project-item {
        width: 25%;
        height: auto;
        display: flex;
        align-content: center;
        justify-content: center;
        border-radius: 10px 10px;
        padding: 10px 0px;
    }

    .project-icon {
        width: 100%;
        max-width: 150px;
        height: auto;
    }

    .blurb-blue {
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    position: relative;
    overflow: hidden;
    background-color: #000;
    }

    .blurb-blue:before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 50%;
        right: 50%;
        top: 0;
        background: #7aa3c1;
        height: 100%;
        -webkit-transition-property: left, right;
        transition-property: left, right;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
        -webkit-transition-timing-function: ease;
        transition-timing-function: ease;
    }

    .blurb-blue:hover:before {
        left: 0;
        right: 0;
    }

    .blurb-grey {
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    position: relative;
    overflow: hidden;
    background-color: #fff;
    }

    .blurb-grey:before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 50%;
        right: 50%;
        top: 0;
        background: rgb(232,233,232);
        height: 100%;
        -webkit-transition-property: left, right;
        transition-property: left, right;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
        -webkit-transition-timing-function: ease;
        transition-timing-function: ease;
    }

    .blurb-grey:hover:before {
        left: 0;
        right: 0;
    }

    @media (max-width: 500px) {
        .flex {
            flex-direction: column;
        }

        .project-item {
            width: 70%;
        }
    }
</style>