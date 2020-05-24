const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = app => {
  app.use(
    createProxyMiddleware("/v2", {
      target: `https://newsapi.org`,
      secure: false,
      changeOrigin: true

    })
  )
}