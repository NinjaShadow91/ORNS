const express = require('express');
const router = express.Router();
const authorization = require('../../middlewares/authorization');

const User = require('../../models/user');

router.get('/', authorization, (req, res) => {
  const { _id} = req.user;
    return User.findById(_id)
      .then(data => {
        const user = data.toObject();
        delete user.password;

        res.status(200).send(user);
      })
      .catch(error => res.status(400).send({ message: error.message }));
});

router.post('/recruiter/:jobID', authorization, (req, res) => {
  User.find({})
    .then(data => {
      var suser=[];
      data.map(user => {
        const cuser = user.toObject();
        if (cuser.appliedJob.includes(Number(req.params.jobID))){
        delete cuser.password;
        delete cuser.savedJob;
        delete cuser.appliedJob;
        suser.push(cuser)
        }
      })
      res.status(200).send(suser);
      })
    .catch(error => {
      console.log(error);
      res.status(400).send({ message: error.message })
    });
});

router.patch('/', authorization, (req, res) => {
  const { _id} = req.user;
  const {
    firstName, lastName, email, mobileNumber,cstatus,
    country, zipCode, address, state,city,landmark,
    experience,education,skills,currentJob,pastJob,
    extra,certifications 
  } = req.body;

    return User.updateOne({ _id }, 
      { $set: { firstName, lastName, email, mobileNumber,cstatus,
      country, zipCode, address, state,city,landmark,
      experience,education,skills,currentJob,pastJob,
      extra,certifications  }
     })
      .then(success => res.status(200).send(success.nModified.toString()))
      .catch(error => res.status(400).send({ message: error.message }));
});

module.exports = router;
