import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';

//route pages
import HomePage from './components/Home/HomePage.vue';
import WebAppsPage from './components/Web_Applications/WebAppsPage.vue';

Vue.config.productionTip = false

//access to vue router
Vue.use(VueRouter);

// Vue.use(vuetify);

//define routes
const routes = [
  { path: '/', component: HomePage },
  { path: '/web-apps', component: WebAppsPage },
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
