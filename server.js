var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var getNewMail = function (firstName, lastName, message, email) {
  let mailText = "<p>";
  mailText += "First name: " + firstName + ".<br/>";
  mailText += "Last name: " + lastName + ".<br/>";
  mailText += "EMail: " + email + ".<br/>";
  mailText += "Message: " + message + ".<br/>";
  mailText += "</p>";


  return {
    from: "facu.larocca@gmail.com",
    to: "facundo_larocca@yahoo.com.ar",
    subject: "Contact - www.facundolarocca.com.ar",
    html: mailText
  };
}

var getMailer = function () {
  let mailer = require("nodemailer");
  let smtpTransport = require('nodemailer-smtp-transport');

  let options = {
    service: 'gmail',
    secure: true,
    auth: {
      user: 'facu.larocca@gmail.com',
      pass: 'Microsoft2016'
    }
  };

  return mailer.createTransport(smtpTransport(options));
};

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html')
});

app.post('/contactme', function (req, res) {
  let mailer = getMailer();
  let mail = getNewMail(req.body.firstName, req.body.lastName, req.body.message, req.body.email);

  mailer.sendMail(mail, (error, response) => {
    if (error) {
      res.status(500).json({ code: 200, message: 'Mail could not be sent.', error: error });
    } else {
      res.status(200).json({ code: 200, message: 'Mail has been sent.'});
    }

    mailer.close();
  });
});

app.listen(PORT, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});