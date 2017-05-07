import * as ActionTypes from '../constants/ActionTypes'

export const init = (position) => {
  return {
    type: ActionTypes.INIT_THEME_SELECTOR,
    position
  }
}

export const themeSelected = (themeSelected) => {
  return {
    type: ActionTypes.THEME_SELECTED,
    themeSelected
  }
}
