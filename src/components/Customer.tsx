import * as React from 'react';
import { createFragmentContainer } from 'react-relay';
import { Customer_customer } from './__generated__/Customer_customer.graphql';
import OrderList from './OrderList';
const graphql = require('babel-plugin-relay/macro');

interface Props {
  customer: Customer_customer;
}

function Customer(props: Props) {
  return (
    <li>
      <a href="">{props.customer.name} </a>
      <OrderList customer={props.customer} />
    </li>
  );
}

export default createFragmentContainer(Customer, {
  customer: graphql`
    fragment Customer_customer on Customer {
      name
      billingAddress
      ...OrderList_customer
    }
  `
});
