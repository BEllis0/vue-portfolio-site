import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HomePage from './components/Home/HomePage.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

//access to vue router
Vue.use(VueRouter);

// Vue.use(vuetify);

//define routes
const routes = [
  { path: '/', component: HomePage },
  // { path: '/', component: HomePage },
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
