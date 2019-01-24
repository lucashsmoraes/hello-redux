import React from 'react';
import CounterContainer from './counter-redux'
import './App.css';

const App = ({ store }) => (
  <CounterContainer store={store} />
)

export default App;
