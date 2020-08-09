'use strict';

const nodemailer = require('nodemailer');

const AWStransport = nodemailer.createTransport({
  host: process.env.AWS_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.AWS_USER,
    pass: process.env.AWS_PASS
  },
  debug: true
});

const sendGridtransport = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_SERVICE_USER, 
    pass: process.env.EMAIL_SERVICE_PASS
  }
});

module.exports = {AWStransport, sendGridtransport};