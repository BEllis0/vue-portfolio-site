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
                name: "The Center for Women's Health Research",
                url_link: 'http://cwhr.org/',
                anchor_link: 'cwhr',
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
                name: "National Retail Concept Partners",
                url_link: 'http://nrcpartners.com/',
                anchor_link: 'nrcp',
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
                name: "Third Sector Communication Strategies",
                url_link: 'https://tscstrategies.com/',
                anchor_link: 'tscs',
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
                name: "Cry Without Tears",
                url_link: 'https://www.crywithouttears.org/',
                anchor_link: 'cwt',
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
                id: 5,
                name: "Close to Home CO",
                url_link: 'http://closetohomeco.org',
                anchor_link: 'cth',
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
                id: 6,
                name: "The Reciprocity Collective",
                url_link: 'http://reciprocitycollective.org',
                anchor_link: 'reciprocity',
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