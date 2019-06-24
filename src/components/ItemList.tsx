import * as React from 'react';
import { createFragmentContainer } from 'react-relay';
import Item from './Item';
import { ItemList_store } from './__generated__/ItemList_store.graphql';
const graphql = require('babel-plugin-relay/macro');

interface Props {
  store: ItemList_store;
}

class ItemList extends React.Component<Props> {
  renderItems() {
    if (!this.props.store.items) {
      throw new Error('assertion failed');
    }
    return this.props.store.items.map(item => {
      if (!item) throw new Error('assertion failed');
      return <p>Hello</p>;
    });
  }
  render() {
    return <ul>{this.renderItems()}</ul>;
  }
}

export default createFragmentContainer(ItemList, {
  store: graphql`
    fragment ItemList_store on Store {
      items {
        id
        ...Item_item
      }
    }
  `
});
