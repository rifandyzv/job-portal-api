const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema(
  {
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
    isActive: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: { createdAt: 'createdAt' }, versionKey: false }
)

const jobModel = mongoose.model('Job', jobSchema, 'jobs')
module.exports = jobModel
