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
        }
      }
      store {
        id
        totalCount
      }
    }
  }
`;

function sharedUpdater(
  rssProxy: RecordSourceSelectorProxy,
  store: CustomerList_store,
  newEdge: RecordProxy | null
) {
  const storeProxy = rssProxy.get(store.id);
  const conn = ConnectionHandler.getConnection(
    storeProxy,
    'CustomerList_customers'
  );
  ConnectionHandler.insertEdgeAfter(conn, newEdge);
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
    updater: (rssProxy: RecordSourceSelectorProxy) => {
      const payload: RecordProxy | null = rssProxy.getRootField(
        'createCustomer'
      );

      if (payload !== null) {
        const newEdge = payload.getLinkedRecord('customerEdge');
        sharedUpdater(rssProxy, store, newEdge);
      }
    },
    optimisticUpdater: (rssProxy: RecordSourceSelectorProxy) => {
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
    onCompleted: (response, errors) => {
      console.log('Response received from server.');
    },
    onError: err => console.error(err)
  });
}

export default { commit };
