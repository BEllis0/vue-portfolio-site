<template>
<div>
    <div v-for="design in DesignsItems" :key="design.id">
        <DesignsItem v-bind:design="design" />
    </div>
</div>
</template>

<script>
import DesignsItem from './DesignsItem.vue';

export default {
    name: "DesignsList",
    components: {
        DesignsItem
    },
    data: () => ({
        DesignsItems: [
            { 
                id: 1,
                name: "Watchlists.io | Stock App",
                url_link: 'http://watchlists.io/',
                anchor_link: 'watchlist',
                details: `Built using the MERN stack (Mongoose, Express, React & Node). 
                            Uses Alpha Vantage API for real time and historical stock data and Google News API for stock news. 
                            Designed with Material UI. 
                            Includes password hashing with bcryptjs. 
                            Uses Google Recaptcha to secure forms. 
                            Throttling and debouncing with lodash.`,
                images: [
                    {id: 143, link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775160/watchlist-scaled.jpg'},
                    {id: 256, link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775161/watchlist-search-scaled.jpg'},
                    {id: 388, link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775162/watchlist-signup.jpg'}
                ]
            },
            { 
                id: 2,
                name: "Watchlists.io | Stock App",
                url_link: 'http://watchlists.io/',
                anchor_link: 'watchlist',
                details: `Built using the MERN stack (Mongoose, Express, React & Node). 
                            Uses Alpha Vantage API for real time and historical stock data and Google News API for stock news. 
                            Designed with Material UI. 
                            Includes password hashing with bcryptjs. 
                            Uses Google Recaptcha to secure forms. 
                            Throttling and debouncing with lodash.`,
                images: [
                    {id: 143, link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775160/watchlist-scaled.jpg'},
                    {id: 256, link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775161/watchlist-search-scaled.jpg'},
                    {id: 388, link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775162/watchlist-signup.jpg'}
                ]
            },
            { 
                id: 3,
                name: "Watchlists.io | Stock App",
                url_link: 'http://watchlists.io/',
                anchor_link: 'watchlist',
                details: `Built using the MERN stack (Mongoose, Express, React & Node). 
                            Uses Alpha Vantage API for real time and historical stock data and Google News API for stock news. 
                            Designed with Material UI. 
                            Includes password hashing with bcryptjs. 
                            Uses Google Recaptcha to secure forms. 
                            Throttling and debouncing with lodash.`,
                images: [
                    {id: 143, link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775160/watchlist-scaled.jpg'},
                    {id: 256, link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775161/watchlist-search-scaled.jpg'},
                    {id: 388, link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775162/watchlist-signup.jpg'}
                ]
            },
            { 
                id: 4,
                name: "Watchlists.io | Stock App",
                url_link: 'http://watchlists.io/',
                anchor_link: 'watchlist',
                details: `Built using the MERN stack (Mongoose, Express, React & Node). 
                            Uses Alpha Vantage API for real time and historical stock data and Google News API for stock news. 
                            Designed with Material UI. 
                            Includes password hashing with bcryptjs. 
                            Uses Google Recaptcha to secure forms. 
                            Throttling and debouncing with lodash.`,
                images: [
                    {id: 143, link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775160/watchlist-scaled.jpg'},
                    {id: 256, link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775161/watchlist-search-scaled.jpg'},
                    {id: 388, link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775162/watchlist-signup.jpg'}
                ]
            },
        ]
    })
}
</script>

<style scoped>

</style>