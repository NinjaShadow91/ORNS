const express = require('express');
const router = express.Router();
const authorization = require('../../middlewares/authorization');

const Message = require('../../models/message');
const User = require('../../models/user');

router.get('/:otherUserID', authorization, async (req, res) => {
    console.log("in message get api");
    const user = await User.findById(req.user._id);
    // await new Promise(r => setTimeout(r, 1000));
    Message.find({toUserID: req.params.otherUserID, fromUserID: user.userID})
   .then( sentMessages => {
    Message.find({toUserID: user.userID, fromUserID: req.params.otherUserID})
    .then ( recvMessages => {
    console.log(sentMessages, recvMessages);
    res.status(200).send({sentMessages, recvMessages});
    })
    })
    .catch(error => res.status(400).send({ message: error.message }));
});

router.post('/', authorization, async (req, res) => {
    console.log("in post message ", req.body);
    const user = await User.findById(req.user._id);
    const message = new Message({
        toUserID: req.body.otherUserID,
        fromUserID: user.userID,
        messageMatter: req.body.messageMatter
    });
    message
        .save()
        .then(() => {res.status(200).send({sendStatus: true});})
        .catch(error => res.status(400).send({ message: error.message }));
});

module.exports = router;