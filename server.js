var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var Mail = require('./server/Mail');
var Mailer = require('./server/Mailer');
var app = express();
var mailer = new Mailer();
var PORT = process.env.PORT || 3001;

var getNewMail = (mailBody) => {
  var body = '<p>';
  body += 'First name: ' + mailBody.firstName + '.<br/>';
  body += 'Last name: ' + mailBody.lastName + '.<br/>';
  body += 'Mail name: ' + mailBody.email + '.<br/>';
  body += 'Message name: ' + mailBody.message + '.<br/>';
  body += '</p>';

  return new Mail('facu.gmail@gmail.com', 'facundo_larocca@yahoo.com.ar', body, 'Contact - www.facundolarocca.com.ar');
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
});

app.post('/contactme', (req, res) => {
  var mail = getNewMail(req.body);
  mailer.send(mail)
    .then(() => {
      res.status(200).json({ code: 200, message: 'Mail has been sent.' });
    }, (cause) => {
      res.status(400).json({ code: 200, message: 'Mail could not be sent.', error: cause });
    });
});

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});