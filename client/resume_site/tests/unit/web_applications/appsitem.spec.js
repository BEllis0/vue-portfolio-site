import { shallowMount } from '@vue/test-utils'
import AppsItem from '../../../src/components/Web_Applications/AppsItem.vue';

const javascript = 'https://cdn.worldvectorlogo.com/logos/javascript.svg';
const jquery = 'https://cdn.iconscout.com/icon/free/png-512/jquery-10-1175155.png';
const react = 'https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png';
const bootstrap = 'https://dh.virginia.edu/system/files/styles/large/private/bootstrap-stack.png?itok=b_S8F9nO';
const express = 'https://pngimage.net/wp-content/uploads/2018/05/express-js-png-5.png';
const node = 'https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-512.png';
const css = 'https://lh3.googleusercontent.com/proxy/IT0phnNXA51Cl-Cu17SgFALCy_lahBowtTdhAAOAOttk1Y71W3LrVp2DI63GQS7Ett21kdEp1E-cYUg4_8eV-3cicRV160mnE3CnRmYArLe_1fX313fvrmZd8Dn_klXmK5atiubS6E5Ym5-QhBw92iEOZm8B_A';
const html = 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/184/full/html5.png';
const mongoose = 'https://opencollective-production.s3-us-west-1.amazonaws.com/7a00cdd0-fae4-11e7-ae09-7f36f712693a.png';
const mongo = 'https://cdn.iconscout.com/icon/free/png-256/mongodb-3-1175138.png';
const mysql = 'https://cdn.worldvectorlogo.com/logos/mysql.svg';
const heroku = 'https://cdn.iconscout.com/icon/free/png-256/heroku-1-282458.png';
const docker = 'https://www.docker.com/sites/default/files/social/docker_facebook_share.png';

describe('Apps Item', () => {
  it('renders properly', () => {
    const appsitem = shallowMount(AppsItem, {
      stubs: ['router-link'],
      propsData: {
          app: {
            id: 1,
            name: "Watchlists.io | Stock App",
            url_link: 'http://watchlists.io/',
            anchor_link: 'watchlist',
            github: 'https://github.com/BEllis0/Stock-App',
            technologies: [
                {id: 543, img_link: javascript},
                {id: 1234, img_link: react},
                {id: 555, img_link: css},
                {id: 678, img_link: node},
                {id: 21, img_link: express},
                {id: 778, img_link: mongo},
                {id: 88888, img_link: mongoose},
                {id: 43, img_link: heroku},
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
                {id: 143, link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775160/watchlist-scaled.jpg'},
                {id: 256, link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775161/watchlist-search-scaled.jpg'},
                {id: 388, link: 'https://res.cloudinary.com/btdigital/image/upload/v1585775162/watchlist-signup.jpg'}
            ]
          }
      }
    });
    expect(appsitem.exists()).toBeTruthy();
  });
});