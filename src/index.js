import React from 'react';
import { render } from 'react-dom'
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux-flow/reducers/todos'
import App from './App';

const store = createStore(reducer)

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
