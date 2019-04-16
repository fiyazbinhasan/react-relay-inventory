import * as React from 'react';
import { createFragmentContainer } from 'react-relay';
import { Order_order } from './__generated__/Order_order.graphql';
const graphql = require('babel-plugin-relay/macro');

interface Props {
  order: Order_order;
}

class Order extends React.Component<Props> {
  render() {
    return (
      <li>
        {this.props.order.tag}, <i>{this.props.order.createdAt}</i>
      </li>
    );
  }
}

export default createFragmentContainer(Order, {
  order: graphql`
    fragment Order_order on Order {
      tag
      createdAt
    }
  `
});
