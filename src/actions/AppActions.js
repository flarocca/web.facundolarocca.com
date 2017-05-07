import * as ActionTypes from '../constants/ActionTypes'

export const pageScrolled = (top) => {
  return {
    type: ActionTypes.PAGE_SCROLLED,
    top
  }
}

export const menuSelected = (menuSelected) => {
  return {
    type: ActionTypes.MENU_SELECTED,
    menuSelected
  }
}

export const languageChanged = (language) => {
  return {
    type: ActionTypes.LANGUAGE_CHANGED,
    language
  }
}
