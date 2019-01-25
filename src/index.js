import React from 'react';
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';

const counter = (state = 0, action) => {
  switch (action.type) {
      case 'INCREMENT': return state + 1
      case 'DECREMENT': return state - 1
      default:
  }
  return state
}

const store = createStore(counter)

const renderApp = (NextApp) => {
    render(
        <Provider store={store}>
          <NextApp />
        </Provider>,        
      document.querySelector('[data-js="App"]')
    )
  }
  
  renderApp(App)
  if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default
      renderApp(NextApp)
    })
  }

serviceWorker.unregister();
