require('dotenv').config()

const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors');
const nodemailer = require('nodemailer')
const port = 4321

app.use(cors());
app.use(morgan('dev'));
app.use(
  express.json({
    type: ['application/json', 'text/plain'],
  })
);
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`simpleMailer is live on port ${port}`)
  })

app.use('/send', require('./sendMail'))