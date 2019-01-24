import React from 'react';
import './index.css';
import App from './App';
import { render } from 'react-dom'
import * as serviceWorker from './serviceWorker';

const renderApp = (NextApp) => {
    render(
        <NextApp />,
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
