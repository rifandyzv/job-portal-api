const express = require('express')
const { nanoid } = require('nanoid')
const router = express.Router()
const Job = require('./jobs')

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find()
    res.status(200).json(jobs)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message })
  }
})

router.get('/:id', (req, res) => {
  res.status(200).send(req.params.id)
})

router.post('/', async (req, res) => {
  try {
    const id = nanoid(8)
    const date = new Date().toLocaleString()
    const postJob = new Job({
      _id: id,
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      jobType: req.body.jobType,
      salary: req.body.salary,
      description: req.body.description,
      postedAt: date,
      updatedAt: date,
      isActive: req.body.isActive
    })

    const savedJob = await postJob.save()
    res.status(201).json(savedJob)
  } catch (err) {
    console.log(err)
    res.status(400).json({
      message: err.message
    })
  }
})
router.put('/', (req, res) => {})
router.delete('/', (req, res) => {})

module.exports = router
