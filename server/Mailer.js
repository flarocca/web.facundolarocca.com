var Mail = require('../Mail');

export default class Mailer {
  constructor() {
    this._getNewMail = this._getNewMail.bind(this);
    this._getMailer = this._getMailer.bind(this);
  }

  send(mail) {
    return new Promise((resolve, reject) => {
      let mailToSend = this._getNewMail(mail);

      this._getMailer().sendMail(mailToSend.toJson(), (error, response) => {
        mailer.close();

        if (error)
          return reject(error);

        return resolve();
      });
    });
  }

  _getNewMail(mail) {
    if (mail instanceof Mail)
      return mailM

    return new Mail(mail.from, mail.to, mail.body, mail.options);
  }

  _getMailer() {
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
  }
}