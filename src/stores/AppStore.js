import { EventEmitter } from 'events'
import assign from 'object-assign'
import AppConstants from '../constants/AppConstants'
import AppDispatcher from '../dispatcher/Dispatcher'
import TranslationProvider from '../services/TranslationProvider'
import ThemeManager from '../services/ThemeManager'

let _translationProvider = new TranslationProvider()

let CHANGE_EVENT = 'change'
let _languageSet = null
let _menuSelected = null
let _themeSelected = null
let _isSendingMail = false
let _errorSendingMail = null
let _mailSent = false

let AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener: function (callback) {
    return this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },
  getLanguageSet () {
    if (!_languageSet) {
      _languageSet = _translationProvider.getTranslation('DEFAULT')
    }

    return _languageSet
  },
  getMenuSelected () {
    return _menuSelected
  },
  getThemeSelected () {
    return ThemeManager.getTheme(_themeSelected)
  },
  isSendingMail () {
    return _isSendingMail
  },
  getErrorSendingMail () {
    return _errorSendingMail
  },
  mailSent () {
    return _mailSent
  }
})

AppStore.dispatchToken = AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case AppConstants.INIT_APP:
      _languageSet = _translationProvider.getTranslation('DEFAULT')
      AppStore.emitChange()
      break

    case AppConstants.LANGUAGE_CHANGED:
      _languageSet = _translationProvider.getTranslation(action.data)
      _menuSelected = null
      AppStore.emitChange()
      break

    case AppConstants.MENU_SELECTED:
      _menuSelected = action.data
      AppStore.emitChange()
      break

    case AppConstants.THEME_SELECTED:
      _themeSelected = action.data
      _menuSelected = null
      AppStore.emitChange()
      break

    case AppConstants.SENDING_MAIL:
      _isSendingMail = true
      _errorSendingMail = null
      AppStore.emitChange()
      break

    case AppConstants.MAIL_SENDED:
      _isSendingMail = false
      _errorSendingMail = null
      _mailSent = true
      AppStore.emitChange()
      break

    case AppConstants.ERROR_SENDING_MAIL:
      _isSendingMail = false
      _errorSendingMail = action.error
      _mailSent = false
      AppStore.emitChange()
      break

    default:
      AppStore.emitChange()
      break
  }
})

AppStore.setMaxListeners(20)

module.exports = AppStore
