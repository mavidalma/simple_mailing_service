'use strict'

const express = require('express');
const router = express.Router();
const {AWStransport, SendGridtransport} = require('./lib/nodemailerTransport');
router.post("/", async (req,res,next)=> {
  
  try {
    const message = req.body.message;
    const to = req.body.to
    const subject = req.body.subject;

    /**
       * you can inplement it on sengrid changing the transport
     */
    await AWStransport.sendMail({
        from: process.env.AWS_MAIL_ADDRESS,
        to,
        subject,
        html: message,
      });

    res.send({success: true})
  }  catch(err) {
      res.send({success: false, message: err.message})
  }
})

module.exports = router