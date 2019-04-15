import * as React from 'react';

import { QueryRenderer, createFragmentContainer } from 'react-relay';
import environment from '../utility/relayEnvironment';
import ItemList from './ItemList';
import CustomerList from './CustomerList';
const graphql = require('babel-plugin-relay/macro');

interface Props {
  token: string;
  error: string;
}

const query = graphql`
  query ConsoleQuery {
    store {
      id
      totalCount
      ...ItemList_store
      ...CustomerList_store
    }
  }
`;

export default class DevConsole extends React.Component<Props> {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return (
            <div>
              <p>Token: {this.props.token}</p>
              <p>Error: {this.props.error}</p>
              <ItemList store={props.store} />
              <CustomerList store={props.store} />
            </div>
          );
        }}
      />
    );
  }
}
