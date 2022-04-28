const express = require('express')
const router = express.Router()
const {
  getAllHandler,
  getByIdHandler,
  postHandler,
  putHandler,
  deleteHandler
} = require('./handler')

router.get('/', getAllHandler)
router.get('/:id', getByIdHandler)
router.post('/', postHandler)
router.put('/:id', putHandler)
router.delete('/:id', deleteHandler)

module.exports = router
