import * as ActionTypes from '../constants/ActionTypes'
import ApiService from '../services/ApiService'

export const sendingMail = () => {
  return {
    type: ActionTypes.SENDING_MAIL
  }
}

export const requiredFieldsSendingMail = (fieldsRequired) => {
  return {
    type: ActionTypes.REQUIRED_FIELDS_SENDING_MAIL,
    fieldsRequired
  }
}

export const errorSendingMail = (errorMessages) => {
  return {
    type: ActionTypes.ERROR_SENDING_MAIL,
    errorMessages
  }
}

export const mailSent = () => {
  return {
    type: ActionTypes.MAIL_SENT
  }
}

export function sendMail(firstName, lastName, message, email) {
  return dispatch => {
    let required = {
      firstName: firstName.length === 0,
      lastName: lastName.length === 0,
      message: message.length === 0,
      email: email.length === 0,
      hasErrors: firstName.length === 0 || lastName.length === 0 || message.length === 0 || email.length === 0
    }

    if (required.hasErrors) {
      dispatch(requiredFieldsSendingMail(required))
    } else {
      dispatch(sendingMail())
      let mail = { firstName, lastName, message, email }
      ApiService.sendMail(mail)
        .then(() => {
          dispatch(mailSent())
        }, (cause) => {
          dispatch(errorSendingMail(cause.message))
        })
    }
  }
}
