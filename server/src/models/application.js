const { string, number, required } = require('joi');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const ApplicationSchema = mongoose.Schema({ 
    applicationID: {
        type: Number,
        required: true,
        unique: true,
        id: true,
        default: () => parseInt(uuidv4(),16)
      },
      applied: {
          type:Boolean,
          required: true,
      },
      saved: {
          type:Boolean,
          required: true,
      },
      jobID: {
          type: Number,
          required: true,
      },
      applicantID: {
          type: Number,
          required: true,
      },
      appliedDate: {
        type: Date,
        required: true,
        default: Date()
      },
      reviewedDate: {
          type: Date,
          required: false
      }
});

module.exports = mongoose.model('applications', ApplicationSchema);