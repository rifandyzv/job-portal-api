const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  role: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role'
    }
  ]
})

const userModel = mongoose.model('User', userSchema, 'users')
module.exports = userModel
