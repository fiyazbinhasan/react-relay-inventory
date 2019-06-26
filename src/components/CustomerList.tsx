import * as React from 'react';
import { createRefetchContainer, RelayRefetchProp } from 'react-relay';
import Customer from './Customer';
import createCustomer from '../mutations/createCustomer';
import { CustomerList_store } from './__generated__/CustomerList_store.graphql';
const graphql = require('babel-plugin-relay/macro');

interface OwnProps {
  store: CustomerList_store;
}

interface RelayProps {
  relay: RelayRefetchProp;
}

type Props = RelayProps & OwnProps;

interface State {
  limit: number;
}

class CustomerList extends React.Component<Props> {
  loadMore = (event: React.FormEvent<HTMLButtonElement>) => {
    const refetchVariables = (fragmentVariables: any) => ({
      limit: fragmentVariables.limit + 10
    });
    this.props.relay.refetch(refetchVariables);
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

  renderCustomers() {
    if (!this.props.store.customers || !this.props.store.customers.edges) {
      throw new Error('assertion failed');
    }
    return this.props.store.customers.edges.map(edge => {
      const node = edge && edge.node;
      if (!node) throw new Error('assertion failed');
      return <Customer key={node.id} customer={node} />;
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="newName" />
          <input type="text" ref="newBillingAddress" />
          <button type="submit">Add</button>
        </form>
        <ul>{this.renderCustomers()}</ul>
        <button onClick={this.loadMore}>Load More</button>

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
          limit: { type: "Int", defaultValue: 3 } # Optional argument
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
