import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import React from 'react';

import Root from './Root';
import CustomerList from './CustomerList';
const graphql = require('babel-plugin-relay/macro');

const CustomerListQuery = graphql`
  query routes_CustomerList_Query {
    store {
      ...CustomerList_store
    }
  }
`;

export default makeRouteConfig(
  <Route
    path="/"
    render={props => <Root />}
    query={graphql`
      query routes_DevConsole_Query {
        store {
          id
          totalCount
          ...ItemList_store
          ...CustomerList_store
        }
      }
    `}
  >
    <Route Component={CustomerList} query={CustomerListQuery} />
  </Route>
);
