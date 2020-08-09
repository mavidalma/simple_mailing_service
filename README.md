# Simple mailer service

This is a very simple and brief mailing microservice, to be used directly on frontend to handle contact forms.

It works with either [AWS SES](https://aws.amazon.com/ses/?nc1=h_ls) or [Sendgrid](https://sendgrid.com/), so first thing you need to do, in case you do not have already an account, is open one. It is very easy and straightforward.

If you do not have your domain on AWS, I sincerely recommend sendGrid, but... 
> "that is just like, your opinion, man" - the dude.

## How to use It

Just go ahead and clone the repo.

sh```
cd simple_mailing_service
npm i
```
Then you should configure a .env file with your account settings (you got an expample on envexample) and toggle the transport you want to use on sendMail.js

You can use either *AWStransport* or *sendgridTransport*

Then, to run it, just use 

sh```
npm start
```

## Development

You can run the service on development mode running

sh```
npm run dev
```

You can change the port on index.js

It will be listening on port 4321 by default

### Disclaimer

This is my very first contribution so if you have any suggestion, comment, or whatever, please let me know. :)
