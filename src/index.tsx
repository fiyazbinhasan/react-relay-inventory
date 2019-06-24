import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { environment, Router } from './utility/relayEnvironment';
const { Resolver } = require('found-relay');

serviceWorker.unregister();

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(
  <Router resolver={new Resolver(environment)} />,
  document.getElementById('root')
);
