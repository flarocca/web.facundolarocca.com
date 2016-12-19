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
  }
}
module.exports = AppActions;