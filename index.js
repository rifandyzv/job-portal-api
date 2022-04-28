require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./app/router')
const authRouter = require('./app/authRouter')

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)
const port = 3000 || process.env.PORT

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('connected to mongodb')
  })

app.listen(port, () => {
  console.log('server started at http://localhost:' + port)
})

app.use('/jobs', router)
app.use('/auth', authRouter)
