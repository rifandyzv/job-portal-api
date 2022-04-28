const express = require('express')
const Job = require('../models/jobs')

const getAllHandler = async (req, res) => {
  try {
    const jobs = await Job.find()
    res.status(200).json(jobs)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message })
  }
}

const getByIdHandler = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)
    if (job == null) {
      throw new Error('id not found')
    }
    res.status(200).json(job)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

const postHandler = async (req, res) => {
  try {
    const { role } = req.user
    console.log(req.user)
    console.log(role)
    if (role != 'admin') {
      throw new Error('unauthorized user!')
    }
    const postJob = new Job({
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      jobType: req.body.jobType,
      salary: req.body.salary,
      description: req.body.description,
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
}

const putHandler = async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({ 'updated-id': updatedJob._id })
  } catch (err) {
    console.log(err)
    res.status(400).json({
      message: err.message
    })
  }
}

const deleteHandler = async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndRemove(req.params.id)
    if (deletedJob == null) {
      throw new Error('id not found')
    }
    res.status(200).json({
      status: 'deleted',
      data: deletedJob
    })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

module.exports = {
  getAllHandler,
  getByIdHandler,
  postHandler,
  putHandler,
  deleteHandler
}
