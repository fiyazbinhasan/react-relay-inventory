import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { createFragmentContainer } from 'react-relay';

import Item from './Item';
import { Items_viewer } from './__generated__/Items_viewer.graphql';
const graphql = require('babel-plugin-relay/macro');

const useStyles = makeStyles(theme => ({
  itemContainer: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

interface Props {
  viewer: Items_viewer;
}

export const Items: React.FunctionComponent<Props> = props => {
  const classes = useStyles();
  function renderItems() {
    if (!props.viewer.items) {
      throw new Error('assertion failed');
    }
    return props.viewer.items.map(item => {
      if (!item) throw new Error('assertion failed');
      return (
        <Grid key={item.id} item xs={6} sm={4} md={3}>
          <Item item={item} />
        </Grid>
      );
    });
  }

  return (
    <Container className={classes.itemContainer} maxWidth="md">
      <Grid container spacing={2}>
        {renderItems()}
      </Grid>
    </Container>
  );
};

export default createFragmentContainer(Items, {
  viewer: graphql`
    fragment Items_viewer on Viewer {
      items {
        id
        ...Item_item
      }
    }
  `
});
