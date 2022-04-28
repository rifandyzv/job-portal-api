const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
  role: String
})

const roleModel = mongoose.model('Role', roleSchema, 'roles')
module.exports = roleModel
