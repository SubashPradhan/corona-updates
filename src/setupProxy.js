const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = app => {
  app.use(
    createProxyMiddleware("/v2/top-headlines", {
      target: "http://newsapi.org",
      // secure: false,
      changeOrigin: true
    })
  )
}