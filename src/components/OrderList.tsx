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

function OrderList(props: Props) {
  const renderOrders = () => {
    if (!props.customer.orders || !props.customer.orders.edges) {
      throw new Error('assertion failed');
    }
    return props.customer.orders.edges.map(edge => {
      const node = edge && edge.node;
      if (!node) throw new Error('assertion failed');
      return <Order key={node.id} order={node} />;
    });
  };

  return (
    <div>
      <ul>{renderOrders()}</ul>
    </div>
  );
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
