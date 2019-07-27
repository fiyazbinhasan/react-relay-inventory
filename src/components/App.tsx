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
import CustomerList from './CustomerList';

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
              <Register
                {...props}
                isRegistered={this.props.auth.isRegistered}
                registerUser={this.props.registerUser}
                registering={this.props.auth.registering}
              />
            )}
          />
          <Route
            path="/login"
            render={props => (
              <Login
                {...props}
                isLoggedIn={this.props.auth.isLoggedIn}
                loginUser={this.props.loginUser}
                loggingIn={this.props.auth.loggingIn}
              />
            )}
          />
          <Route path="/" exact render={() => <Dashboard />} />
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
