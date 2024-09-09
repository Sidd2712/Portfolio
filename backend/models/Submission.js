const mongoose = require('mongoose');

// Define the schema for form submissions
const submissionSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  phone: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true,
    enum: ['web', 'uiux', 'adobe', 'seo'], // Restrict to these values
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model from the schema
const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
