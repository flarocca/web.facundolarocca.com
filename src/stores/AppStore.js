import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppConstants from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/Dispatcher';
import TranslationProvider from '../services/TranslationProvider';

var _translationProvider = new TranslationProvider();

var CHANGE_EVENT = 'change';
var _languageSet = null;

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
      AppStore.emitChange();
      break;
  }
});

module.exports = AppStore;