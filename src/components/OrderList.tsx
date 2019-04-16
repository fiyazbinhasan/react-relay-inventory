import * as React from 'react';
import {
  createRefetchContainer,
  RelayProp,
  FragmentVariablesGetter,
  createFragmentContainer
} from 'react-relay';
import { OrderList_customer } from './__generated__/OrderList_customer.graphql';
import Order from './Order';
const graphql = require('babel-plugin-relay/macro');

interface OwnProps {
  customer: OrderList_customer;
}

interface RelayProps {
  relay: RelayProp;
}

type Props = RelayProps & OwnProps;

class OrderList extends React.Component<Props> {
  renderOrders() {
    if (!this.props.customer.orders || !this.props.customer.orders.edges) {
      throw new Error('assertion failed');
    }
    return this.props.customer.orders.edges.map(edge => {
      const node = edge && edge.node;
      if (!node) throw new Error('assertion failed');
      return <Order key={node.id} order={node} />;
    });
  }

  render() {
    return (
      <div>
        <ul>{this.renderOrders()}</ul>
      </div>
    );
  }
}

export default createFragmentContainer(OrderList, {
  customer: graphql`
    fragment OrderList_customer on Customer
      @argumentDefinitions(
        limit: { type: "Int", defaultValue: 3 } # Optional argument
      ) {
      orders(first: $limit) @connection(key: "OrderList_orders") {
        edges {
          node {
            id
            ...Order_order
          }
        }
      }
    }
  `
});
