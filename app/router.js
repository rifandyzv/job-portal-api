const express = require('express')
const router = express.Router()
const {
  getAllHandler,
  getByIdHandler,
  postHandler,
  putHandler,
  deleteHandler
} = require('./handler')
const { verifyJWT } = require('./auth')

router.get('/', getAllHandler)
router.get('/all', verifyJWT, (req, res) => {
  res.send('asdasd')
})
router.get('/:id', getByIdHandler)
router.post('/', postHandler)
router.put('/:id', putHandler)
router.delete('/:id', deleteHandler)
module.exports = router
