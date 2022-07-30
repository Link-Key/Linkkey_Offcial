const { createProxyMiddleware } = require('http-proxy-middleware');
const backendIp = 'https://m.douban.com'

module.exports = function (app) {
    app.use('/api', createProxyMiddleware({
        target: backendIp,
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/',
        },
    }))
};
