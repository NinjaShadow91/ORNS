const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const UserSchema = mongoose.Schema({
  userID: {
    type: Number,
    required: true,
    unique: true,
    id: true,
    default: () => parseInt(uuidv4(),16)
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: false
  },
  mobileNumber: {
    type: Number,
  },
  email: {
    id: true,
    type: String,
    required: true
  },
  cstatus: {
    type: String,
    required: false,
  },
  profImage: {
    type:String,
    required:false
  },
  country: {
    type: String,
    required:false
  },
  zipCode: {
    type: Number,
    required:false
  },
  address: {
    type: String,
    required:false
  },
  state: {
    type: String,
    required:false
  },
  city: {
    type: String,
    required:false
  },
  landmark: {
    type: String,
    required:false
  },
  experience: {
    type: String,
    required:false
  },
  education: {
    type: String,
    required:false
  },
  skills: {
    type:String,
    required:false
  },
  currentJob: {
    type: String,
    required:false
  },
  pastJob: {
    type: String,
    required:false
  },
  savedJob: {
    type: [Number],
    default: [],
    required: true
  },
  appliedJob:{
    type: [Number],
    default:[],
    required: true
  },
  extra: {
    type: String,
    required:false
  },
  certifications: {
    type: String,
    required:false
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);
