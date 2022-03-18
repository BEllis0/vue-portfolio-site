<template>
<div>
    <div v-for="app in appItems" :key="app.id">
        <AppsItem v-bind:app="app" />
    </div>
</div>
</template>

<script>
import AppsItem from './AppsItem.vue';
import {generateId}  from '../../assets/generateId.js';

const javascript = 'https://cdn.worldvectorlogo.com/logos/javascript.svg';
const jquery = 'https://cdn.iconscout.com/icon/free/png-512/jquery-10-1175155.png';
const react = 'https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png';
const redux = 'https://codedistrict.io/wp-content/uploads/2017/12/reduxLogo.png';
const bootstrap = 'https://dh.virginia.edu/system/files/styles/large/private/bootstrap-stack.png?itok=b_S8F9nO';
const vue = 'https://cdn.iconscout.com/icon/free/png-512/vue-282497.png';
const express = 'https://pngimage.net/wp-content/uploads/2018/05/express-js-png-5.png';
const node = 'https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-512.png';
const css = 'https://lh3.googleusercontent.com/proxy/IT0phnNXA51Cl-Cu17SgFALCy_lahBowtTdhAAOAOttk1Y71W3LrVp2DI63GQS7Ett21kdEp1E-cYUg4_8eV-3cicRV160mnE3CnRmYArLe_1fX313fvrmZd8Dn_klXmK5atiubS6E5Ym5-QhBw92iEOZm8B_A';
const sass = 'https://cdn.worldvectorlogo.com/logos/sass-1.svg';
const html = 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/184/full/html5.png';
const mongoose = 'https://opencollective-production.s3-us-west-1.amazonaws.com/7a00cdd0-fae4-11e7-ae09-7f36f712693a.png';
const mongo = 'https://cdn.iconscout.com/icon/free/png-256/mongodb-3-1175138.png';
const mysql = 'https://cdn.worldvectorlogo.com/logos/mysql.svg';
const heroku = 'https://cdn.iconscout.com/icon/free/png-256/heroku-1-282458.png';
const docker = 'https://www.docker.com/sites/default/files/social/docker_facebook_share.png';
const jest = 'https://jestjs.io/img/jest.png';
const cypress = 'https://cdn.auth0.com/blog/cypress-tests/logo.png';
const artillery = 'https://avatars2.githubusercontent.com/u/12608521?s=400&v=4';

export default {
    name: "AppsList",
    components: {
        AppsItem
    },
    data: () => ({
        appItems: [
            { 
                id: generateId(),
                name: "Current Project: Spotify Library Cleaner & Dashboard",
                url_link: null,
                anchor_link: 'spotify',
                github: 'https://github.com/spotify-dashboard/spotify-client',
                technologies: [
                    {id: generateId(), img_link: javascript},
                    {id: generateId(), img_link: react},
                    {id: generateId(), img_link: redux},
                    {id: generateId(), img_link: sass},
                    {id: generateId(), img_link: node},
                    {id: generateId(), img_link: express},
                    {id: generateId(), img_link: heroku},
                    {id: generateId(), img_link: jest},
                ],
                details: `A dashboarding and library cleaning tool created with the Spotify API that allows a user to view activity metrics,
                gain insight into their listening habits, and clean out old and unlistened songs from their libraries. Minor features include realtime viewing of currently playing song,
                viewing playlists and account information. Planned features include song recommendations, rediscovering forgotten songs, song clustering, and detailed metrics on music taste, and mood.`,
                dependencies: `Backend: cors, cookie-parser, dotenv, express, http-proxy-middleware, spotify-web-api-node, nodemon, node-sass, morgan, | 
                            Frontend: axios, scss/sass, @material-ui/icons, react, react-redux, redux-thunk react-dom, react-router, react-router-dom, chart.js, react-chartjs-2, lodash, react-recaptcha-google, webpack | 
                            Deployment and testing: jest, deployment TBD`,
                images: [
                    {id: generateId(), link: 'https://res.cloudinary.com/btdigital/image/upload/v1587925369/spotify-playlistall.jpg'},
                    {id: generateId(), link: 'https://res.cloudinary.com/btdigital/image/upload/v1587925370/spotify-playlist-songs.jpg'},
                    {id: generateId(), link: 'https://res.cloudinary.com/btdigital/image/upload/v1587925372/spotify-account.jpg'}
                ]
                
            },
            { 
                id: generateId(),
                name: "Watchlists.io | Stock App",
                url_link: 'http://watchlists.io/',
                anchor_link: 'watchlist',
                github: 'https://github.com/BEllis0/Stock-App',
                technologies: [
                    {id: generateId(), img_link: javascript},
                    {id: generateId(), img_link: react},
                    {id: generateId(), img_link: css},
                    {id: generateId(), img_link: node},
                    {id: generateId(), img_link: express},
                    {id: generateId(), img_link: mongo},
                    {id: generateId(), img_link: mongoose},
                    {id: generateId(), img_link: heroku},
                ],
                details: `Built with the MERN stack and Alpha Vantage and News API to display realtime and historical stock data and news, allow users to create an account, and to create watchlists. 
                            Displays stock pricing, volume, and indicator data in a variety of timeframes views, including daily, weekly, monthly, six months, yearly, and multi-year. 
                            Designed with Material UI. 
                            Includes password hashing and session tokens for user authentication. 
                            Uses Google Recaptcha to secure forms. 
                            Throttling and debouncing API call limits with lodash.`,
                dependencies: `Backend: bcrypt, cors, dotenv, express, mongoose, newsapi, nodemon, pusher, validator | 
                            Frontend: axios, @material-ui/core, @material-ui/icons, @material-ui/lab, react, react-dom, react-router, react-router-dom, chart.js, react-chartjs-2, lodash, http-proxy-middleware, react-recaptcha-google`,
                images: [
                    {id: generateId(), link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775160/watchlist-scaled.jpg'},
                    {id: generateId(), link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775161/watchlist-search-scaled.jpg'},
                    {id: generateId(), link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775162/watchlist-signup.jpg'}
                ]
            },
            { 
                id: generateId(),
                name: "Portfolio (this website)",
                url_link: 'http://brandontellis.com',
                anchor_link: 'portfolio',
                github: 'https://github.com/BEllis0/vue-portfolio-site',
                technologies: [
                    {id: generateId(), img_link: javascript},
                    {id: generateId(), img_link: vue},
                    {id: generateId(), img_link: css},
                    {id: generateId(), img_link: node},
                    {id: generateId(), img_link: express},
                    {id: generateId(), img_link: mysql},
                    {id: generateId(), img_link: jest},
                    {id: generateId(), img_link: cypress},
                    {id: generateId(), img_link: artillery},
                    {id: generateId(), img_link: heroku},
                ],
                details: `A replacement for my existing WordPress website, built with Vue. Future plans: Building an admin portal 
                that will provide content management system features. This will include CRUD options for adding/changing/deleting projects 
                and profile information from a user interface.`,
                dependencies: `Backend: express, dotenv, cors, nodemon, mysql | 
                            Frontend: vue, vuetify, vue-router, vue-lazyload | 
                            Testing: cypress (e2e), jest (unit), artillery (load) | 
                            Deployment and other: heroku, vue-gtag (Google Analytics), tableau 
                            `
                ,
                images: [
                    {id: generateId(), link: 'https://res.cloudinary.com/btdigital/image/upload/v1587922156/portfolio-home.jpg'},
                    {id: generateId(), link: 'https://res.cloudinary.com/btdigital/image/upload/v1587922156/portfolio-apps.jpg'}
                ]
            },
            { 
                id: generateId(),
                name: "Amazon Prime Video Clone",
                url_link: 'https://amazon-review-service.herokuapp.com/',
                anchor_link: 'amazon',
                github: 'https://github.com/obnoxious-hippopotamus/review-service',
                technologies: [
                    {id: generateId(), img_link: javascript},
                    {id: generateId(), img_link: react},
                    {id: generateId(), img_link: css},
                    {id: generateId(), img_link: node},
                    {id: generateId(), img_link: express},
                    {id: generateId(), img_link: mysql},
                    {id: generateId(), img_link: docker},
                    {id: generateId(), img_link: heroku},
                    {id: generateId(), img_link: jest},
                ],
                details: `A full-stack Amazon Prime Video landing page built in a service-oriented architecture. The project was designed and built by myself and two teammates during the Hack Reactor program as our Front End Capstone.
                            I was tasked with building the review service (movie reviews) portion of the application, database design, containerization (Docker), building a proxy server API gateway, and deployment on AWS.
                            The client was built with React, Material UI, and chartJS. The server/database was built with node, express and MySQL.
                            The review service and backend were tested with Jest and Enzyme. Database seed data was collected from The Movie DB, and additionally produced with fakerJS.`,
                dependencies: `Backend: axios, cors, dotenv, express, faker, morgan, mysql, nodemon | 
                            testing: jest, enzyme, jest-enzyme, babel-jest, enzyme-adapter-react-16, react-test-renderer | 
                            Frontend: react, react-dom, chart.js, @material-ui/core, @material-ui/icons, @material-ui/lab, webpack, babel`,
                images: [
                    {id: generateId(), link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775164/amazon-scaled.jpg'}
                ]
            },
            { 
                id: generateId(),
                name: "Weather App",
                url_link: 'https://bellis0.github.io/weather-app/',
                anchor_link: 'weather',
                github: 'https://github.com/BEllis0/weather-app',
                technologies: [
                    {id: generateId(), img_link: javascript},
                    {id: generateId(), img_link: react},
                    {id: generateId(), img_link: jquery},
                    {id: generateId(), img_link: css},
                    {id: generateId(), img_link: bootstrap},
                ],
                details: `A front-end application built with React, and the Open Weather Map API. Allows users to search for weather forecasts internationally, or use their current location.`,
                dependencies: `Frontend: react, react-dom, bootsrap, jquery, gh-pages`,
                images: [
                    {id: generateId(), link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775166/weather-app-details-scaled.jpg'},
                    {id: generateId(), link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775165/weather-app-scaled.jpg'}
                ]
            },
            { 
                id: generateId(),
                name: "Image Editor",
                url_link: null,
                anchor_link: 'image-editor',
                github: 'https://github.com/BEllis0/image-editor',
                technologies: [
                    {id: generateId(), img_link: javascript},
                    {id: generateId(), img_link: jquery},
                    {id: generateId(), img_link: html},
                    {id: generateId(), img_link: css},
                    {id: generateId(), img_link: bootstrap},
                ],
                details: `A frontend application built with jQuery and CSS3 image filters.
                            Allows a user to paste an image URL into the search bar to render an image and apply filters 
                            - saturation, contrast, brightness, grey scale, sepia, and blur. The user can then reset the filters.`,
                dependencies: `Frontend: jQuery, CSS3, HTML, Bootstrap`,
                images: [
                    {id: generateId(), link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775167/image-editor2-scaled.jpg'},
                    {id: generateId(), link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775168/image-editor1-scaled.jpg'}
                ]
            },
        ]
    })
}
</script>

<style scoped>

</style>