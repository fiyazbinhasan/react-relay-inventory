import * as React from 'react';
import { createFragmentContainer } from 'react-relay';
import Item from './Item';
const graphql = require('babel-plugin-relay/macro');

interface Props {
  store: any;
}

class ItemList extends React.Component<Props> {
  render() {
    return (
      <ul>
        {this.props.store.items.map((item: any) => (
          <Item item={item} />
        ))}
      </ul>
    );
  }
}

export default createFragmentContainer(ItemList, {
  store: graphql`
    fragment ItemList_store on Store {
      items {
        ...Item_item
      }
    }
  `
});
