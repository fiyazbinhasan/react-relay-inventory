import { connect } from 'react-redux';
import { AppState } from '../store';

import React from 'react';
import { Action, Dispatch } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import { registerUser } from '../thunks/registerUser';
import { loginUser } from '../thunks/loginUser';

import { AuthState, RegisterModel, LoginModel } from '../store/auth/types';
import { RegisterInterface } from './Register';
import { LoginInterface } from './Login';
import DevConsole from './Console';
import { ThunkAction } from 'redux-thunk';

interface AppProps {
  registerUser: any;
  loginUser: any;
  auth: AuthState;
}

class App extends React.Component<AppProps> {
  render() {
    return (
      <Router>
        <div>
          <Route
            path="/register"
            render={props => (
              <RegisterInterface
                {...props}
                registerUser={this.props.registerUser}
                registering={this.props.auth.registering}
              />
            )}
          />
          <Route
            path="/login"
            render={props => (
              <LoginInterface
                {...props}
                isLoggedIn={this.props.auth.isLoggedIn}
                loginUser={this.props.loginUser}
                loggingIn={this.props.auth.loggingIn}
              />
            )}
          />
          <Route
            path="/console"
            render={props => (
              <DevConsole
                token={this.props.auth.token}
                error={this.props.auth.error}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser, loginUser }
)(App);
