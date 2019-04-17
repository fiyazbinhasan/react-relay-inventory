import * as React from 'react';
import { environment, Router } from '../utility/relayEnvironment';
const { Resolver } = require('found-relay');

interface Props {
  token: string;
  error: string;
}

export default class MainApp extends React.Component<Props> {
  render() {
    return (
      <div>
        <p>{this.props.token}</p>
        <p>{this.props.error}</p>
        <Router resolver={new Resolver(environment)} />
      </div>
    );
  }
}
