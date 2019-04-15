import * as React from 'react';
import { createRefetchContainer } from 'react-relay';
import Customer from './Customer';
import createCustomer from '../mutations/createCustomer';
const graphql = require('babel-plugin-relay/macro');

interface OwnProps {
  store: any;
}

interface RelayProps {
  relay: any;
}

type Props = RelayProps & OwnProps;

class CustomerList extends React.Component<Props> {
  refetchVariables = (limit: number) => ({
    limit: limit
  });

  setLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let newLimit = Number(e.target.value);
    this.props.relay.refetch(this.refetchVariables(newLimit));
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createCustomer.commit(
      this.props.relay.environment,
      this.props.store,
      (this.refs.newName as HTMLInputElement).value,
      (this.refs.newBillingAddress as HTMLInputElement).value
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="newName" />
          <input type="text" ref="newBillingAddress" />
          <button type="submit">Add</button>
        </form>
        <select onChange={this.setLimit}>
          <option>1</option>
          <option>3</option>
          <option>5</option>
        </select>
        <ul>
          {this.props.store.customers.edges.map((edge: any) => (
            <Customer key={edge.node.id} customer={edge.node} />
          ))}
        </ul>
        <p>Total customers: {this.props.store.totalCount}</p>
      </div>
    );
  }
}

export default createRefetchContainer(
  CustomerList,
  {
    store: graphql`
      fragment CustomerList_store on Store
        @argumentDefinitions(
          limit: { type: "Int", defaultValue: 1 } # Optional argument
        ) {
        customers(first: $limit) @connection(key: "CustomerList_customers") {
          edges {
            node {
              id
              ...Customer_customer
            }
          }
        }
        id
        totalCount
      }
    `
  },
  graphql`
    query CustomerListRefetchQuery($limit: Int) {
      store {
        ...CustomerList_store @arguments(limit: $limit)
      }
    }
  `
);
