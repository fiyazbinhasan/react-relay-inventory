import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

serviceWorker.unregister();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#563d7c'
    },
    secondary: {
      main: '#ffe484'
    }
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
