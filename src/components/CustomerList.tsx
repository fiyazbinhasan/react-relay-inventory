import * as React from 'react';
import { createRefetchContainer, RelayRefetchProp } from 'react-relay';
import Customer from './Customer';
import createCustomer from '../mutations/createCustomer';
import { CustomerList_viewer } from './__generated__/CustomerList_viewer.graphql';
const graphql = require('babel-plugin-relay/macro');

interface OwnProps {
  viewer: CustomerList_viewer;
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
      this.props.viewer,
      (this.refs.newName as HTMLInputElement).value,
      (this.refs.newBillingAddress as HTMLInputElement).value
    );
  };

  renderCustomers() {
    if (!this.props.viewer.customers || !this.props.viewer.customers.edges) {
      throw new Error('assertion failed');
    }
    return this.props.viewer.customers.edges.map(edge => {
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

        <p>Total customers: {this.props.viewer.totalCount}</p>
      </div>
    );
  }
}

export default createRefetchContainer(
  CustomerList,
  {
    viewer: graphql`
      fragment CustomerList_viewer on Viewer
        @argumentDefinitions(
          limit: { type: "Int", defaultValue: 10 } # Optional argument
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
      viewer {
        ...CustomerList_viewer @arguments(limit: $limit)
      }
    }
  `
);
