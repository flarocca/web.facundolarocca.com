var Validator = require('no-if-validator').Validator;
var NotNullOrUndefinedCondition = require('no-if-validator').NotNullOrUndefinedCondition;
var config = require('config');
var Routes = require('./Routes');
var Mail = require('../Mail');
var Mailer = require('../Mailer');

var mailer = null;

class ContactMeRoutes extends Routes {
    constructor() {
        super();

        this._sendMail = this._sendMail.bind(this);
        this._getNewMail = this._getNewMail.bind(this);

        mailer = new Mailer();
    }

    _addAllRoutes(server) {
        server.post('/contactme', super._bodyIsNotNull, this._sendMail);
    }

    _sendMail(req, res) {
        var mail = this._getNewMail(req.body);
        mailer.send(mail)
            .then(() => {
                res.status(200).json({ code: 200, message: 'Mail has been sent.' });
            }, (cause) => {
                res.status(400).json({ code: 400, message: 'Mail could not be sent.', error: cause });
            });
    }

    _getNewMail(mailBody) {
        var body = '<p>';
        body += 'First name: ' + mailBody.firstName + '.<br/>';
        body += 'Last name: ' + mailBody.lastName + '.<br/>';
        body += 'Mail: ' + mailBody.email + '.<br/>';
        body += 'Message: ' + mailBody.message + '.<br/>';
        body += '</p>';

        return new Mail(config.sendFromMail, config.sendToMail, body, 'Contact - www.facundolarocca.com.ar');
    };
}

module.exports = ContactMeRoutes;