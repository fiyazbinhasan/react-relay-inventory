import * as React from 'react';
import { createFragmentContainer } from 'react-relay';
import { Item_item } from './__generated__/Item_item.graphql';
const graphql = require('babel-plugin-relay/macro');

interface Props {
  item: Item_item;
}

class Item extends React.Component<Props> {
  render() {
    return (
      <li>
        {this.props.item.title} - ${this.props.item.sellingPrice}
      </li>
    );
  }
}

export default createFragmentContainer(Item, {
  item: graphql`
    fragment Item_item on Item {
      title
      sellingPrice
    }
  `
});
