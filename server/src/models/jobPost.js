const { string, number, required } = require('joi');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const JobPostSchema = mongoose.Schema({
  jobID: {
    type: Number,
    required: true,
    unique: true,
    id: true,
    default: () => parseInt(uuidv4(),16)
  },
  jobTitle: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  contactDetails: {
    type: String,
    required: true
  },
  jobResponsibility: {
    type: String,
    required: true
  },
  jobLocation: {
    type: String,
    required: true
  },
  maxNumofApplicants: {
    type: Number,
    required:false
  },
  maxNumofSelections: {
    type: Number,
    required: true
  },
  releaseDate: {
    type: Date,
    default: Date()
  },
  industryType: {
    type: String,
    required: false
  },
  requirements:{
    type:String,
    required:false
  },
  requiredDegree: {
    type: String,
    required: false
  },
  requiredExperience: {
    type: Number,
    required: false
  },
  aprroxSalary: {
    type: Number,
    required: true
  },
  recruiterID: {
    type:Number,
    required:true
  }
});

module.exports = mongoose.model('JobPosts', JobPostSchema);
