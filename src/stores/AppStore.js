import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppConstants from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/Dispatcher';
import TranslationProvider from '../services/TranslationProvider';

var _translationProvider = new TranslationProvider();

var CHANGE_EVENT = 'change';
var _languageSet = null;
var _menuSelected = null;

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    return this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getLanguageSet() {
    if (!_languageSet)
      _languageSet = _translationProvider.getTranslation('DEFAULT');

    return _languageSet;
  },
  getMenuSelected() {
    return _menuSelected;
  }
});

AppStore.dispatchToken = AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case AppConstants.INIT_APP:
      _languageSet = _translationProvider.getTranslation('DEFAULT');
      AppStore.emitChange();
      break;

    case AppConstants.LANGUAGE_CHANGED:
      _languageSet = _translationProvider.getTranslation(action.data);
      _menuSelected = null;
      AppStore.emitChange();
      break;

    case AppConstants.MENU_SELECTED:
      _menuSelected = action.data;
      AppStore.emitChange();
      break;
  }
});

module.exports = AppStore;