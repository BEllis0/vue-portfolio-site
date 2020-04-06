<template>
    <v-app id="app">
    <router-view></router-view>
    </v-app>
</template>

<script>
import ProfileApi from './api/profile.js';

export default {
  name: 'App',
  components: {

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

  /* Variables */
  * {
    --light-blue: #7aa3c1;
    --grey: rgb(204, 204, 204);
  }
  

  .flex {
    display: flex !important;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .inline {
    display: inline;
  }

  .block {
    display: block;
  }

  .remove-margin {
    margin: 0px;
  }

  .right-align {
    text-align: right;
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

  /* ==== Contact Info Overlay ==== */
  .contact-overlay {
      background-color: white;
      display: flex;
      flex-direction: column;
      color: black;
      width: 500px;
      height: auto;
      border-radius: 10px;
      margin: 0 auto;
      -moz-box-shadow:    inset 0 0 10px #000000;
      -webkit-box-shadow: inset 0 0 10px #000000;
      box-shadow:         inset -8px -8px 0 #7aa3c1;
  }

  .contact-info-section {
      width: 90%;
      margin: 0 auto;
      padding: 5px;
  }

  .hide-contact {
      background-color: #7aa3c1;
      margin: 0 auto !important;
      border-radius: 8px 8px 0 0 !important;
  }

  /* ===== Specific Pages ===== */

  /* Web Applications */


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

    .module {
      padding: 30px 0px;
    }

    .section-title {
      padding-left: 20px !important;
    }

    .contact-overlay {
      width: 90%;
    }

  }
</style>
