import AppConstants from '../constants/AppConstants'
import Dispatcher from '../dispatcher/Dispatcher'
import ApiService from '../services/ApiService'

class AppActions {
  static initializeApp () {
    Dispatcher.handleViewAction({
      actionType: AppConstants.INIT_APP
    })
  }

  static languageChanged (language) {
    Dispatcher.handleViewAction({
      actionType: AppConstants.LANGUAGE_CHANGED,
      data: language
    })
  }

  static menuSelected (menu) {
    Dispatcher.handleViewAction({
      actionType: AppConstants.MENU_SELECTED,
      data: menu
    })
  }

  static themeSelected (themeName) {
    Dispatcher.handleViewAction({
      actionType: AppConstants.THEME_SELECTED,
      data: themeName
    })
  }

  static sendMail (firstName, lastName, message, email) {
    Dispatcher.handleViewAction({
      actionType: AppConstants.SENDING_MAIL
    })

    let mail = {
      'firstName': firstName,
      'lastName': lastName,
      'message': message,
      'email': email
    }

    ApiService.sendMail(mail)
      .then(() => {
        Dispatcher.handleViewAction({
          actionType: AppConstants.MAIL_SENDED
        })
      }, (cause) => {
        Dispatcher.handleViewAction({
          actionType: AppConstants.ERROR_SENDING_MAIL,
          error: cause.message
        })
      })
  }
}
module.exports = AppActions
