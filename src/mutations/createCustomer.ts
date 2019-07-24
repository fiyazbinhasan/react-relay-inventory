import { commitMutation } from 'react-relay';
import {
  Environment,
  RecordSourceSelectorProxy,
  ConnectionHandler,
  RecordProxy
} from 'relay-runtime';
import { CustomerList_store } from '../components/__generated__/CustomerList_store.graphql';

const graphql = require('babel-plugin-relay/macro');

const mutation = graphql`
  mutation createCustomerMutation($input: CreateCustomerInput!) {
    createCustomer(input: $input) {
      clientMutationId
      customerEdge {
        cursor
        __typename
        node {
          id
          billingAddress
          name
          orders {
            edges {
              node {
                tag
                createdAt
              }
            }
          }
        }
      }
      store {
        id
        totalCount
      }
    }
  }
`;

function sharedUpdater(rssProxy: any, store: CustomerList_store, newEdge: any) {
  const storeProxy = rssProxy.get(store.id);
  const conn = ConnectionHandler.getConnection(
    storeProxy,
    'CustomerList_customers'
  );

  if (conn) ConnectionHandler.insertEdgeAfter(conn, newEdge);
}

let tempID = 0;

function commit(
  environment: Environment,
  store: CustomerList_store,
  name: string,
  billingAddress: string
) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        name,
        billingAddress,
        clientMutationId: tempID++
      }
    },
    updater: (rssProxy: any) => {
      const payload = rssProxy.getRootField('createCustomer');

      if (payload !== null && payload !== undefined) {
        const newEdge = payload.getLinkedRecord('customerEdge');
        sharedUpdater(rssProxy, store, newEdge);
      }
    },
    optimisticUpdater: (rssProxy: any) => {
      const id = 'client:newCustomer:' + tempID++;
      const node = rssProxy.create(id, 'Customer');
      node.setValue(name, 'name');
      node.setValue(billingAddress, 'billingAddress');
      node.setValue(id, 'id');

      const newEdge = rssProxy.create(
        'client:newEdge:' + tempID++,
        'CustomerEdge'
      );

      newEdge.setLinkedRecord(node, 'node');
      sharedUpdater(rssProxy, store, newEdge);

      const storeProxy = rssProxy.get(store.id);
      if (storeProxy)
        storeProxy.setValue(
          storeProxy.getValue('totalCount') + 1,
          'totalCount'
        );
    },
    onCompleted: (response: any, errors: any) => {
      console.log('Response received from server.');
    },
    onError: (err: any) => console.error(err)
  });
}

export default { commit };
