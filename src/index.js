// This file is where all requests land
// It includes the App components which manages the default layout of the system
// It then includes Routing as the child of App which is the content of each page
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components';
import Routes from './routes';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Routes />
    </App>
  </BrowserRouter>
  ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();