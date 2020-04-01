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
      this.profile = await ProfileApi.getProfile(process.env.PROFILE_ID);
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
    background-color: black;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
  }

  /* ====== Helper styles ======  */
  .flex {
    display: flex !important;
    flex-direction: row ;
    flex-wrap: wrap;
  }

  .inline {
    display: inline;
  }

  .block {
    display: block;
  }

  /* text colors */
  .grey-text {
    color: rgb(204, 204, 204);
    margin: 2px 0px;
  }

  .light-blue-text {
    color: #7aa3c1;
  }

  a {
      color: #7aa3c1;
  }

  /* ===== container styles ===== */

  /* Main content sections */
  .main-page-container {
    width: 75%;
    margin: 0 auto;
  }
  
  /* Section containers */
  .module {
    width: 100%;
    padding: 20px 0px;
    background-color: black;
  }


  /* ===== global responsive designs ===== */

  @media (max-width: 500px) {
    .flex {
      flex-direction: column !important;
      justify-content: center;
      align-items: center;
    }

    .main-page-container {
      width: 100%;
    }

  }
</style>
