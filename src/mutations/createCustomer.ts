import { commitMutation } from 'react-relay';
import {
  Environment,
  RecordSourceSelectorProxy,
  ConnectionHandler,
  RecordProxy
} from 'relay-runtime';

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
  recordSource: RecordSourceSelectorProxy,
  store: any,
  newEdge: RecordProxy | null
) {
  const storeProxy = recordSource.get(store.id);
  const conn = ConnectionHandler.getConnection(
    storeProxy,
    'CustomerList_customers'
  );
  console.log(conn);
  ConnectionHandler.insertEdgeAfter(conn, newEdge);
}

let tempID = 0;

function commit(
  environment: Environment,
  store: any,
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
    updater: (recordSource: RecordSourceSelectorProxy) => {
      const payload: RecordProxy | null = recordSource.getRootField(
        'createCustomer'
      );

      if (payload !== null) {
        const newEdge = payload.getLinkedRecord('customerEdge');
        sharedUpdater(recordSource, store, newEdge);
      }
    },
    optimisticUpdater: (recordSource: RecordSourceSelectorProxy) => {
      // Create a Todo record in our store with a temporary ID
      const id = 'client:newCustomer:' + tempID++;
      const node = recordSource.create(id, 'Customer');
      node.setValue(name, 'name');
      node.setValue(billingAddress, 'billingAddress');
      node.setValue(id, 'id');

      // Create a new edge that contains the newly created Todo record
      const newEdge = recordSource.create(
        'client:newEdge:' + tempID++,
        'CustomerEdge'
      );

      newEdge.setLinkedRecord(node, 'node');
      sharedUpdater(recordSource, store, newEdge);

      const storeProxy = recordSource.get(store.id);
      console.log(storeProxy!.getValue('totalCount'));

      storeProxy!.setValue(
        storeProxy!.getValue('totalCount') + 1,
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
