import TranslationProvider from '../services/TranslationProvider'
import * as ActionType from '../constants/ActionTypes'
import ThemeManager from '../services/ThemeManager'

let _translationProvider = new TranslationProvider()

const initialState = {
  languageSet: _translationProvider.getTranslation('DEFAULT'),
  menuSelected: null,
  themeSelected: ThemeManager.getTheme(null),
  languageSelected: 'ARG',
  initialLanguage: 'ARG',
  headerClass: 'hdr',
  itemClass: 'column column-item-x4 hr-menu-item',
  linkClass: 'link-btn-menu',
  iconClass: 'icon-btn-menu',
  btnClass: 'text-btn',
  checked: false
}


export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.PAGE_SCROLLED:
      return Object.assign({}, state, {
        headerClass: action.top >= 620 ? 'hdr-fix' : 'hdr',
        itemClass: action.top >= 620 ? 'column column-item-x4 hr-menu-item-fix' : 'column column-item-x4 hr-menu-item',
        linkClass: action.top >= 620 ? 'link-btn-menu-fixed' : 'link-btn-menu',
        iconClass: action.top >= 620 ? 'icon-btn-menu-fixed' : 'icon-btn-menu',
        btnClass: action.top >= 620 ? 'text-btn-fixed' : 'text-btn'
      })
    case ActionType.LANGUAGE_CHANGED:
      return Object.assign({}, state, {
        languageSet: _translationProvider.getTranslation(action.language),
        languageSelected: action.language
      })
    case ActionType.MENU_SELECTED:
      return Object.assign({}, state, {
        menuSelected: action.menuSelected
      })
    case ActionType.THEME_SELECTED:
      return Object.assign({}, state, {
        themeSelected: ThemeManager.getTheme(action.themeSelected)
      })
    default:
      return state
  }
}
