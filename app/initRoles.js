const Role = require('../models/roles')
const validRoles = ['user', 'admin']
const initRoles = () => {
  try {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          role: 'user'
        }).save(() => console.log('user role created'))

        new Role({
          role: 'admin'
        }).save(() => console.log('admin role created'))
      }
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = initRoles
