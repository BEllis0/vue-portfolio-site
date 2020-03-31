const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api/profiles/*', createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true,
    }));




    
};