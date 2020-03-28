<template>
  <div id="app">
    <HomeBanner />
  </div>
</template>

<script>
import HomeBanner from './components/HomeBanner.vue';



export default {
  name: 'App',
  components: {
    HomeBanner
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

.banner-img {
  width: 100%;
  max-width: 100%;
}
</style>
