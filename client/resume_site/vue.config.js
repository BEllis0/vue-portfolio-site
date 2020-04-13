module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api/profiles/*': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
      
    }
  }
}