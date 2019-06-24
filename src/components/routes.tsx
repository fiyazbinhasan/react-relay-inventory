import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import React from 'react';

import Root from './Root';
import CustomerList from './CustomerList';
import Item from './Item';
import ItemList from './ItemList';
const graphql = require('babel-plugin-relay/macro');

const CustomerListQuery = graphql`
  query Routes_CustomerList_Query {
    store {
      ...CustomerList_store
    }
  }
`;

const ItemListQuery = graphql`
  query Routes_ItemList_Query {
    store {
      ...ItemList_store
    }
  }
`;

export default makeRouteConfig(
  <Route
    path="/"
    render={props => <Root />}
    query={graphql`
      query Routes_DevConsole_Query {
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
