const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('../middleware/error');

require('../utils/passport');

const serverConfig = (server) => {
  server.use(cors({
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200,
  }));
  server.use(
    cookieSession({
      maxAge: 24 * 60 * 60 * 1000,
      keys: [process.env.COOKIE_KEY || 'test'],
    }),
  );
  server.use(morgan('dev'));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(express.static('public'));
  server.use(passport.initialize());
  server.use(passport.session());
  server.use(errorHandler);
};

module.exports = serverConfig;
