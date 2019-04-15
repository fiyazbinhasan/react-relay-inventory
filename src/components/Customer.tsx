import * as React from 'react';
import { createFragmentContainer } from 'react-relay';
import { Customer_customer } from './__generated__/Customer_customer.graphql';
const graphql = require('babel-plugin-relay/macro');

interface Props {
  customer: Customer_customer;
}

class Customer extends React.Component<Props> {
  render() {
    return (
      <li>
        {this.props.customer.name} - {this.props.customer.billingAddress}
      </li>
    );
  }
}

export default createFragmentContainer(Customer, {
  customer: graphql`
    fragment Customer_customer on Customer {
      name
      billingAddress
    }
  `
});
