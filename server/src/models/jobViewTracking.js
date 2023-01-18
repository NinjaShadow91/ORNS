const { string, number, required } = require('joi');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const JobViewTrackingSchema = mongoose.Schema({
    traceID: {
        type: Number,
        required: true,
        unique: true,
        id: true,
        default: () => parseInt(uuidv4(),16)
    },
    userID: {
        type: Number,
        required: true,
    },
    jobID: {
        type: Number,
        required: true,
    },
    timestamp: {
        type: Number,
        required: false,
        default: Date.now()
    }
});

module.exports = mongoose.model('jobviewtracking', JobViewTrackingSchema);