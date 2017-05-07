import { combineReducers } from 'redux'
import AppReducer from './AppReducer'
import ThemeSelectorReducer from './ThemeSelectorReducer'
import ContactReducer from './ContactReducer'

const reducer = combineReducers({
  AppReducer,
  ThemeSelectorReducer,
  ContactReducer
})

export default reducer
