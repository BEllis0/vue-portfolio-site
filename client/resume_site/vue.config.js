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
      },
      '/api/testimonials/*': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },
      '/api/web-applications/*': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },
      '/api/web-designs/*': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },
    }
  }
}