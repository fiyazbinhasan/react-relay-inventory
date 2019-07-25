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
    configs: [
      {
        type: 'RANGE_ADD',
        parentID: store.id,
        connectionInfo: [
          {
            key: 'CustomerList_customers',
            rangeBehavior: 'append'
          }
        ],
        edgeName: 'customerEdge'
      }
    ],
    onCompleted: () => {
      console.log('Response received from server.');
    },
    onError: (err: any) => console.error(err)
  });
}

export default { commit };
