import TranslationProvider from '../services/TranslationProvider'
import * as types from '../constants/ActionTypes'

let _translationProvider = new TranslationProvider()

const initialState = {
  languageSet: _translationProvider.getTranslation('DEFAULT'),
  menuSelected: null,
  themeSelected: null,
  isSendingMail: false,
  errorSendingMail: null,
  mailSent: false
}

export const getDefaultLanguagueSet = state => { return state.languageSet }

export function AppReducer (state = initialState, action) {
  switch (action.type) {
    case types.LANGUAGE_CHANGED:
      return Object.assign({}, state, {
        languageSet: _translationProvider.getTranslation(action.language)
      })
    case types.MENU_SELECTED:
      return Object.assign({}, state, {
        menuSelected: action.menuSelected
      })
    case types.THEME_SELECTED:
      return Object.assign({}, state, {
        themeSelected: action.themeSelected
      })
    case types.SENDING_MAIL:
      return Object.assign({}, state, {
        isSendingMail: true
      })
    case types.MAIL_SENDED:
      return Object.assign({}, state, {
        isSendingMail: false,
        mailSent: true
      })
    case types.ERROR_SENDING_MAIL:
      return Object.assign({}, state, {
        isSendingMail: false,
        mailSent: false,
        errorSendingMail: action.error
      })
    default:
      return state
  }
}
