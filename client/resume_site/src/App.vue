<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from './components/Home/HomePage.vue';
import ProfileApi from './api/profile.js';

export default {
  name: 'App',
  components: {
    HomePage,
  },
  data() {
    return {
      profile: [],
      error: ''
    }
  },
  async created() {
    try {
      this.profile = await ProfileApi.postProfile({test: "something"});
    } catch(err) {
      this.error = err;
    }
  }
}
</script>

<style>

  html, body, #app {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
  }

  /* Flex  */
  .flex {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: wrap;
  }

  /* text colors */
  .grey-text {
    color: rgb(150,152,150);
  }

  .light-blue-text {
    color: #7aa3c1;
  }

  /* Main content sections */
  .main-page-container {
    width: 75%;
    margin: 0 auto;
  }
  
  /* Section containers */
  .module {
    width: 100%;
  }
</style>
