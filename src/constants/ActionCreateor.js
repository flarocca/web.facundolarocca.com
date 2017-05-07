import * as types from '../constants/ActionTypes'

export const initApp = language => ({
  type: types.INIT_APP
})

export const receiveLanguague = language => ({
  type: types.INIT_APP,
  language
})

export const receiveMenu = menu => ({
  type: types.MENU_SELECTED,
  menu
})

export const receiveTheme = theme => ({
  type: types.THEME_SELECTED,
  theme
})

export const sendingEmail = () => ({
  type: types.SENDING_MAIL
})

export const mailSended = () => ({
  type: types.MAIL_SENDED
})

export const errorSendingEmail = error => ({
  type: types.ERROR_SENDING_MAIL,
  error
})
