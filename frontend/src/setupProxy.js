/* eslint-disable no-undef */
const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target:
        'elice-kdt-ai-track-vm-distribute-23.koreacentral.cloudapp.azure.com:8000/',
      changeOrigin: true,
    })
  );
};
