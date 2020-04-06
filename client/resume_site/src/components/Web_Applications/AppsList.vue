<template>
<div>
    <div v-for="app in appItems" :key="app.id">
        <AppsItem v-bind:app="app" />
    </div>
</div>
</template>

<script>
import AppsItem from './AppsItem.vue';

export default {
    name: "AppsList",
    components: {
        AppsItem
    },
    data: () => ({
        appItems: [
            { 
                id: 1,
                name: "Watchlists.io | Stock App",
                url_link: 'http://watchlists.io/',
                details: `Built using the MERN stack (Mongoose, Express, React & Node). 
                            Uses Alpha Vantage API for real time and historical stock data and Google News API for stock news. 
                            Designed with Material UI. 
                            Includes password hashing with bcryptjs. 
                            Uses Google Recaptcha to secure forms. 
                            Throttling and debouncing with lodash.`,
                dependencies: `Backend: bcrypt, cors, dotenv, express, mongoose, newsapi, nodemon, pusher, validator. 
                            Frontend: axios, @material-ui/core, @material-ui/icons, @material-ui/lab, react, react-dom, react-router, react-router-dom, chart.js, react-chartjs-2, lodash, http-proxy-middleware, react-recaptcha-google`,
                images: [
                    {link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775160/watchlist-scaled.jpg'},
                    {link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775161/watchlist-search-scaled.jpg'},
                    {link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775162/watchlist-signup.jpg'}
                ]
            },
            { 
                id: 2,
                name: "Amazon Prime Video Clone",
                url_link: 'https://amazon-review-service.herokuapp.com/',
                details: `Built using the MERN stack (Mongoose, Express, React & Node). 
                            Uses Alpha Vantage API for real time and historical stock data and Google News API for stock news. 
                            Designed with Material UI. 
                            Includes password hashing with bcryptjs. 
                            Uses Google Recaptcha to secure forms. 
                            Throttling and debouncing with lodash.`,
                dependencies: `Backend: bcrypt, cors, dotenv, express, mongoose, newsapi, nodemon, pusher, validator. 
                            Frontend: axios, @material-ui/core, @material-ui/icons, @material-ui/lab, react, react-dom, react-router, react-router-dom, chart.js, react-chartjs-2, lodash, http-proxy-middleware, react-recaptcha-google`,
                images: [
                    'https://res.cloudinary.com/btdigital/image/upload/v1585775164/amazon-scaled.jpg'
                ]
            }
        ]
    })
}
</script>

<style scoped>

</style>