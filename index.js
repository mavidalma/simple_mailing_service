require('dotenv').config()

const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors');
const nodemailer = require('nodemailer')
const port = 4321

app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

app.listen(port, () => {
    console.log(`app is live on ${port}`)
  })

app.use('/send', require('./sendMail'))