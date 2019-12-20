const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
const passport = require('passport');
const config = require('../config');
const initializePassport = require('../config/passport');

const createUserTasks  = require('./utils/createUserTasks');

console.log('createUserTasks :', createUserTasks()[0].map(day => new Date(day.date).toString()));

const { app, routes } = require('./controller');

const errorHandler = (req, res, next) => {
  res.status(500).send('No such page');
  next();
};

const startServer = port => {
  app
    .set('superSecret', config.secret)
    .use(cors())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(morgan('dev'))
    .use(passport.initialize())
    .use(express.static('public'))
    .use('/api', routes)
    .use(errorHandler);

    initializePassport(passport);
  app.listen(port);

  console.log('Server was started at http://localhost:' + port);
};

module.exports = startServer;
