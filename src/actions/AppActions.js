import AppConstants from '../constants/AppConstants';
import Dispatcher from '../dispatcher/Dispatcher';

var AppActions = {
  initializeApp: function () {

    Dispatcher.handleViewAction({
      actionType: AppConstants.INIT_APP,
    });
  },
  languageChanged(language) {
    Dispatcher.handleViewAction({
      actionType: AppConstants.LANGUAGE_CHANGED,
      data: language
    });
  },
  menuSelected(menu) {
    Dispatcher.handleViewAction({
      actionType: AppConstants.MENU_SELECTED,
      data: menu
    });
  },
  themeSelected(themeName) {
    Dispatcher.handleViewAction({
      actionType: AppConstants.THEME_SELECTED,
      data: themeName
    });
  },
  sendMail(firstName, lastName, message, email) {
    Dispatcher.handleViewAction({
      actionType: AppConstants.SENDING_MAIL
    });

    setTimeout(() => {
      Dispatcher.handleViewAction({
        actionType: AppConstants.MAIL_SENDED
      });
    }, 5000);


    // Dispatcher.handleViewAction({
    //   actionType: AppConstants.ERROR_SENDING_MAIL
    // });
  }
}
module.exports = AppActions;