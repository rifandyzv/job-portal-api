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

router.get('/', verifyJWT, getAllHandler)
// router.get('/all', verifyJWT, (req, res) => {
//   res.status(200).json({ yourname: req.user })
// })
router.get('/:id', verifyJWT, getByIdHandler)
router.post('/', verifyJWT, postHandler)
router.put('/:id', verifyJWT, putHandler)
router.delete('/:id', verifyJWT, deleteHandler)
module.exports = router
