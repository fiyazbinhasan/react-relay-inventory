import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { createFragmentContainer } from 'react-relay';

import Item from './Item';
import { ItemList_store } from './__generated__/ItemList_store.graphql';
const graphql = require('babel-plugin-relay/macro');

interface Props {
  store: ItemList_store;
}

export const ItemList: React.SFC<Props> = (props) => {
  function renderItems() {
    if (!props.store.items) {
      throw new Error('assertion failed');
    }
    return props.store.items.map(item => {
      if (!item) throw new Error('assertion failed');
      return (
        <Grid key={item.id} item xs={12} sm={6} md={4}>
          <Item item={item} />
        </Grid>
      );
    });
  }

  return (
    <Grid container spacing={4}>{renderItems()}</Grid>
  )
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
