import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import App from './containers/App'
import './css/index.css'
import reducer from './reducers/index'

import { BrowserRouter } from 'react-router-dom'

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
