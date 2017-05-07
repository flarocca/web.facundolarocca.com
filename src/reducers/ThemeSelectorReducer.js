import * as ActionType from '../constants/ActionTypes'
import ThemeManager from '../services/ThemeManager'
import LIGHT_RED_THEME from '../constants/themes/LIGHT_RED_THEME'
import DARK_GREEN_THEME from '../constants/themes/DARK_GREEN_THEME'
import DARK_RED_THEME from '../constants/themes/DARK_RED_THEME'
import LIGHT_PURPLE_THEME from '../constants/themes/LIGHT_PURPLE_THEME'

const initialState = {
  positionStyle: { right: '0px', top: '40%' },
  checkboxId: 'theme',
  labelId: 'themeLabel',
  containerClass: 'Container row fixed main',
  float: 'right',
  themes: [LIGHT_RED_THEME, LIGHT_PURPLE_THEME, DARK_RED_THEME, DARK_GREEN_THEME]
}

export default function ThemeSelectorReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.INIT_THEME_SELECTOR:
      return Object.assign({}, state, {
        positionStyle: action.position === 'RIGHT' ? { right: '0px', top: '40%' } : { left: '0px', top: '40%' },
        checkboxId: action.position === 'RIGHT' ? 'theme' : 'themeLeft',
        labelId: action.position === 'RIGHT' ? 'themeLabel' : 'themeLabelLeft',
        containerClass: action.position === 'RIGHT' ? 'Container row fixed main' : 'Container row-reverse fixed main',
        float: action.position === 'RIGHT' ? 'right' : 'left'
      })
    case ActionType.THEME_SELECTED:
      return Object.assign({}, state, {
        themeSelected: ThemeManager.getTheme(action.themeSelected)
      })
    default:
      return state
  }
}
