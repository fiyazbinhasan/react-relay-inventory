import { connect } from 'react-redux';
import { AppState } from '../store';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import { registerUser } from '../thunks/registerUser';
import { loginUser } from '../thunks/loginUser';
import { AuthState } from '../store/auth/types';

import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';

interface AppProps {
  registerUser: any;
  loginUser: any;
  auth: AuthState;
}

function App(props: AppProps) {
  return (
    <Router>
      <div>
        <Route
          path="/register"
          render={routeProps => (
            <Register
              {...routeProps}
              isRegistered={props.auth.isRegistered}
              registerUser={props.registerUser}
              registering={props.auth.registering}
            />
          )}
        />
        <Route
          path="/login"
          render={routeProps => (
            <Login
              {...routeProps}
              isLoggedIn={props.auth.isLoggedIn}
              loginUser={props.loginUser}
              loggingIn={props.auth.loggingIn}
            />
          )}
        />
        <Route path="/" exact render={() => <Dashboard />} />
      </div>
    </Router>
  );
}

const mapStateToProps = (state: AppState) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser, loginUser }
)(App);
