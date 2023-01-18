const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const authRouter = require('./routes/api/auth');
const userRouter = require('./routes/api/user');
const jobsRouter = require('./routes/api/jobs');
const profileRouter = require('./routes/api/profile');
const messageRouter = require('./routes/api/messages');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose
  .connect(process.env.MONGO_DB_URI, options)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(error));

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/profile', profileRouter);
app.use('/api/message', messageRouter);

app.use((req, res) => res.status(404).send('404 - Not Found'));

module.exports = app;
