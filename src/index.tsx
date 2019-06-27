import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

serviceWorker.unregister();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ab47bc',
    },
    secondary: yellow,
  },
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
