import * as React from 'react';

import { QueryRenderer } from 'react-relay';
import environment from '../utility/relayEnvironment';
import ItemList from './ItemList';
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
            <ItemList store={props.store} />
          );
        }}
      />
    );
  }
}