const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../../models/user');
const { validateSignUp, validateLogIn } = require('../../validation');

router.post('/signup/', async (req, res) => {
  const { firstName, lastName, email, password, country }= req.body;

  const { error } = validateSignUp(req.body);
  if (error) return res.status(400).send({ message: error.message });

  const isEmailExistInUsers = await Users.findOne({ email });
  if (isEmailExistInUsers)
    return res.status(400).send({
      message: 'Account with this email is already registered.'
    });

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  
  const user = new Users({
    firstName,
    lastName,
    email: email,
    password: hash,
    country: country
  });

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  user
    .save()
    .then(data => {
      const user = data.toObject();
      delete user.password;

      res.status(201).send({ user, token });
    })
    .catch(error => res.status(400).send({ message: error.message }));
});

router.post('/login/', async (req, res) => {
  const { email, password } = req.body;
  const { error } = validateLogIn(req.body);
  if (error) return res.status(400).send({ message: error.message });
  
  const user = await Users.findOne({ email });

  if (!user)
    return res.status(400).send({
      message: 'No user found for give details.'
    });

  const checkPassword = bcrypt.compareSync(password, user.password);
  if (!checkPassword)
    return res.status(400).send({ message: 'No user found for give details.' });

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  const userData = user.toObject();
  delete userData.password;

  res.status(200).send({ user: userData, token });
});

module.exports = router;