import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
import VueLazyload from 'vue-lazyload'

//route pages
import HomePage from './components/Home/HomePage.vue';
import WebAppsPage from './components/Web_Applications/WebAppsPage.vue';
import WebDesignsPage from './components/Web_Designs/WebDesignsPage.vue';

Vue.config.productionTip = false

Vue.use(VueRouter); //access to vue router
Vue.use(VueLazyload); // lazy load

//define routes
const routes = [
  { path: '/', component: HomePage },
  { path: '/web-apps', component: WebAppsPage },
  { path: '/web-designs', component: WebDesignsPage },
];

const router = new VueRouter({
  routes,
  mode: 'history' // removes the hash in the url
});

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
});
