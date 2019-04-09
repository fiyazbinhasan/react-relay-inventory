import * as React from 'react';
import { createFragmentContainer } from 'react-relay';
const graphql = require('babel-plugin-relay/macro');

interface Props {
  item: any;
}

class Item extends React.Component<Props> {
  render() {
    return <li key={this.props.item.id}>{this.props.item.title}</li>;
  }
}

export default createFragmentContainer(Item, {
  item: graphql`
    fragment Item_item on Item {
      id
      title
      sellingPrice
    }
  `
});
