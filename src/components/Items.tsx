import * as React from 'react';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';
import { createFragmentContainer } from 'react-relay';

import Item from './Item';
import { Items_store } from './__generated__/Items_store.graphql';
const graphql = require('babel-plugin-relay/macro');

const useStyles = makeStyles(theme => ({
  itemContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

interface Props {
  store: Items_store;
}

export const Items: React.SFC<Props> = props => {
  const classes = useStyles();
  function renderItems() {
    if (!props.store.items) {
      throw new Error('assertion failed');
    }
    return props.store.items.map(item => {
      if (!item) throw new Error('assertion failed');
      return <Item key={item.id} item={item} />;
    });
  }

  return (
    <Container className={classes.itemContainer} maxWidth="md">
      <GridList cellHeight={300} cols={4} spacing={8}>
        {renderItems()}
      </GridList>
    </Container>
  );
};

export default createFragmentContainer(Items, {
  store: graphql`
    fragment Items_store on Store {
      items {
        id
        ...Item_item
      }
    }
  `
});
