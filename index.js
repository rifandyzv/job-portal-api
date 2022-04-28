const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./app/router')

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)
const port = 3000 || process.env.PORT
const mongoURI = 'mongodb://localhost/jobs' || process.env.MONGO_URI

mongoose.connect(mongoURI, () => {
  console.log('connected to mongodb')
})

app.listen(port, () => {
  console.log('server started at http://localhost:' + port)
})

app.use('/jobs', router)
