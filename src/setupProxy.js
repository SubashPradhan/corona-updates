const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = app => {
  app.use(
    createProxyMiddleware("/newsApi", {
      target: `https://newsapi.org/v2/top-headlines?q=corona&apiKey=770da092ee4447b5b91b5f2eb7829583&language=en&sortBy=publishedAt&from=${new Date()}&pageSize=10`,
      secure: false,
      changeOrigin: true
    })
  )
}