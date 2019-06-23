import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

serviceWorker.unregister();

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  }
});

const store = configureStore();

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
);

render(<Root />, document.getElementById('root'));
