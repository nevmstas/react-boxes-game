import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Clock from './DocumentationTests/Tests'
import Toggle from './DocumentationTests/Toggle'
import LoginControl from './DocumentationTests/LoginControl'

import Calculator  from './DocumentationTests/Temperature/Calculator'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Clock />
    <Toggle />
    <LoginControl />
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
