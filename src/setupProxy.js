const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = app => {
  app.use(
    createProxyMiddleware("/v2", {
      target: "http://newsapi.org",
      secure: false,
      changeOrigin: true
    })
  )
}