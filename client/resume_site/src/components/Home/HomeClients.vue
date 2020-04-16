<template>
    <div class="module">
        <div class="main-page-container">
            <h2 class="light-blue-text section-title">CLIENTS</h2>
            <div class="flex">
                <img class="clientImg" alt="Logos for Center for Women's Health Research and The Denver Foundation" src="https://res.cloudinary.com/btdigital/image/upload/v1574379946/1-3_gn3p4q.png" />
                <img class="clientImg" alt="Logos for Women With A Cause Foundation and National Retail Concept Partners" src="https://res.cloudinary.com/btdigital/image/upload/v1574379945/2-3_eq4tsg.png" />
                <img class="clientImg" alt="Logos for Close to Home Campaign and Third Sector Communication Strategies" src="https://res.cloudinary.com/btdigital/image/upload/v1574379944/4-4_lmhap5.png" />
                <img class="clientImg" alt="Logos for West Colfax Food Coop and Southeast Studio" src="https://res.cloudinary.com/btdigital/image/upload/v1574379945/3-3_a0eceo.png" />
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    name: "HomeClients"
}
</script>

<style scoped>
    .module {
        background-color: white;
    }

    .clientImg {
        width: 50%;
    }

    @media (max-width: 500px) {
        
        .main-page-container, .flex, .module {
            width: 100%;
        }

        .clientImg {
            width: 80%;
        }
    }
</style>