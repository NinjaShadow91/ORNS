const { string, number, required } = require('joi');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const MessageSchema = mongoose.Schema({ 
    messageID: {
        type: Number,
        required: true,
        unique: true,
        id: true,
        default: () => parseInt(uuidv4(),16)
      },
    toUserID: {
        type: Number,
        required: true,
    },
    fromUserID: {
        type: Number,
        required: true,
    },
    messageMatter: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true,
        default: () => Date.now()
    }
    });

    module.exports = mongoose.model('messages', MessageSchema);