<template>
  <div id="app">
    <HomeBanner />
    <HomeBio />
    <Footer />
  </div>
</template>

<script>
import HomeBanner from './components/Home/HomeBanner.vue';
import HomeBio from './components/Home/HomeBio.vue';
import Footer from './components/Global/Footer.vue';

export default {
  name: 'App',
  components: {
    HomeBanner,
    HomeBio,
    Footer,
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
