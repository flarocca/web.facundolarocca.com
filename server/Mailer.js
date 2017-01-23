var Mail = require('./Mail');
var config = require('config');

class Mailer {
  constructor() {
    this._getNewMail = this._getNewMail.bind(this);
    this._getMailer = this._getMailer.bind(this);
  }

  send(mail) {
    return new Promise((resolve, reject) => {
      let mailToSend = this._getNewMail(mail);
      let mailer = this._getMailer();

      mailer.sendMail(mailToSend.toJson(), (error, response) => {
        mailer.close();

        if (error)
          return reject(error);

        return resolve();
      });
    });
  }

  _getNewMail(mail) {
    if (mail instanceof Mail)
      return mail;

    return new Mail(mail.from, mail.to, mail.body, mail.options);
  }

  _getMailer() {
    let mailer = require("nodemailer");
    let smtpTransport = require('nodemailer-smtp-transport');

    let options = {
      service: config.service,
      secure: true,
      auth: {
        user: config.user,
        pass: config.password
      }
    };

    return mailer.createTransport(smtpTransport(options));
  }
}

module.exports = Mailer;