const express = require('express')
const app = express()
const router = require('./app/router')
const port = 3000 || process.env.port

app.listen(port, () => {
  console.log('server started at http://localhost:' + port)
})

app.use('/', router)
