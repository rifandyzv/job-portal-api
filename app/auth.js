const User = require('../models/users')
const jwt = require('jsonwebtoken')
const { expressjwt } = require('express-jwt')
const bcrypt = require('bcrypt')

const signUp = async (req, res) => {
  try {
    const username = req.body.username
    const password = req.body.password
    console.log('asdasd')
    if (username && password) {
      const availableUser = await User.findOne({ username: username })
      if (availableUser) {
        throw new Error('Username unavailable')
      }

      encrpytedPassword = await bcrypt.hash(password, 10)

      const newUser = new User({
        username: username,
        password: encrpytedPassword
      })

      const savedUser = await newUser.save()
      res.status(200).json({
        status: 'sign up succes',
        user: savedUser
      })
    } else {
      throw new Error('Input your username and password!')
    }
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const signIn = async (req, res) => {
  try {
    const username = req.body.username
    const password = req.body.password

    const user = await User.findOne({ username: username })
    const checkPassword = await bcrypt.compare(password, user.password)
    if (!user) {
      throw new Error('Username not found. Please sign up!')
    }
    if (checkPassword) {
      const token = jwt.sign(
        {
          username: user.username
        },
        process.env.JWT_SECRET,
        {
          expiresIn: 86400
        }
      )
      return res.status(200).json({ user, token: token })
    } else {
      throw new Error('Invalid credentials!')
    }
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: err.message })
  }
}

const verifyJWT = expressjwt({
  secret: process.env.JWT_SECRET,
  userProerty: 'auth',
  algorithms: ['HS256']
})
module.exports = { signUp, signIn, verifyJWT }
