const express = require('express');
const router = express.Router();
const authorization = require('../../middlewares/authorization');

const User = require('../../models/user');


router.get('/', authorization, (req, res) => {
  User.find({})
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send({ message: error.message }));
});

router.get('/getUsers', authorization, (req, res) => {
  console.log("in get users");
  User.find({})
    .then(users => {
      var susers=[];
      users.forEach(user => {
        if (user._id!= req.user._id){
          const fuser = {firstName: user.firstName, lastName: user.lastName, userID: user.userID};
          susers.push(fuser);
        }
      });
      res.status(200).send(susers)
    })
    .catch(error => res.status(400).send({ message: error.message }));
});

router.get('/savedJobs', authorization, (req, res) => {
  User.findById(req.user._id)
    .then(data => {
      res.status(200).send(data.savedJob);
    })
    .catch(error => res.status(400).send({ message: error.message }));
});

router.get('/appliedJobs', authorization, (req, res) => {
  User.findById(req.user._id)
    .then(data => {
      res.status(200).send(data.appliedJob);
    })
    .catch(error => res.status(400).send({ message: error.message }));
});

router.get('/:id', authorization, (req, res) => {

  User.findById(req.params.id)
    .then(user => res.status(200).send(user))
    .catch(error => res.status(400).send({ message: error.message }));
});

router.delete('/:id', authorization, (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(success => res.status(200).send(success.deletedCount.toString()))
    .catch(error => res.status(400).send({ message: error.message }));
});

module.exports = router;