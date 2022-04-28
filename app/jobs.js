const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    jobType: {
      type: String,
      required: true
    },
    salary: Number,
    description: String,
    postedAt: Date,
    updatedAt: Date,
    isActive: {
      type: Boolean,
      required: true
    }
  },
  { versionKey: false }
)

const jobModel = mongoose.model('Job', jobSchema, 'jobs')
module.exports = jobModel
