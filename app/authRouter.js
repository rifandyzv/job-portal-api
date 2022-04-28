const express = require('express')
const authRouter = express.Router()
const { signUp, signIn } = require('./auth')

authRouter.post('/signup', signUp)
authRouter.post('/signin', signIn)

module.exports = authRouter
