<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from './components/Home/HomePage.vue';


export default {
  name: 'App',
  components: {
    HomePage,
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
  }
</style>
