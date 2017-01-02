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
  menuSelected(menu){
    Dispatcher.handleViewAction({
      actionType: AppConstants.MENU_SELECTED,
      data: menu
    });
  },
  themeSelected(themeName){
    Dispatcher.handleViewAction({
      actionType: AppConstants.THEME_SELECTED,
      data: themeName
    });
  }
}
module.exports = AppActions;