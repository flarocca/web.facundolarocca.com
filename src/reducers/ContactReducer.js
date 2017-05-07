import TranslationProvider from '../services/TranslationProvider'
import * as ActionType from '../constants/ActionTypes'

let _translationProvider = new TranslationProvider()

const initialState = {
  languageSet: _translationProvider.getTranslation('DEFAULT'),
  isSendingMail: false,
  errorSendingMail: null,
  mailSent: false,
  firstNameErrorMsg: '',
  lastNameErrorMsg: '',
  emailErrorMsg: '',
  messageErrorMsg: ''
}

export default function ContactReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.SENDING_MAIL:
      return Object.assign({}, state, {
        isSendingMail: true
      })
    case ActionType.MAIL_SENDED:
      return Object.assign({}, state, {
        isSendingMail: false,
        mailSent: true
      })
    case ActionType.ERROR_SENDING_MAIL:
      return Object.assign({}, state, {
        isSendingMail: false,
        mailSent: false,
        errorSendingMail: state.languageSet.SERVER_IS_BUSY
      })
    case ActionType.REQUIRED_FIELDS_SENDING_MAIL:
      return Object.assign({}, state, {
        firstNameErrorMsg: !action.fieldsRequired.firstName ? '' : state.languageSet.FIELD_REQUIRED_MSG,
        lastNameErrorMsg: !action.fieldsRequired.lastName ? '' : state.languageSet.FIELD_REQUIRED_MSG,
        emailErrorMsg: !action.fieldsRequired.email ? '' : state.languageSet.FIELD_REQUIRED_MSG,
        messageErrorMsg: !action.fieldsRequired.message ? '' : state.languageSet.FIELD_REQUIRED_MSG,
      })
    default:
      return state
  }
}
