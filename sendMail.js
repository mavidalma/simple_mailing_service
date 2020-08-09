'use strict'

const express = require('express');
const router = express.Router();
const {AWStransport, sendgridTransport} = require('./transport/nodemailerTransport');


router.post("/", async (req,res,next)=> {  
  try {
    const message = req.body.message;
    const to = req.body.email;
    const subject = req.body.subject;
    console.log("body", req.body)

    /**
       * you can inplement it on sengrid changing the transport to sendgridTransport
     */
    await AWStransport.sendMail({
        from: process.env.MAIL_ADDRESS,
        to: to,
        subject,
        html: message,
      });

    res.send({success: true, message:`mail correctly served to ${to}`})
  }  catch(err) {
      res.send({success: false, message: err.message})
  }
})

module.exports = router