import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { createRefetchContainer } from 'react-relay';

import Item from './Item';
import { Items_viewer } from './__generated__/Items_viewer.graphql';
const graphql = require('babel-plugin-relay/macro');

const useStyles = makeStyles(theme => ({
  itemContainer: {
    padding: theme.spacing(3)
  }
}));

interface Props {
  viewer: Items_viewer;
}

export const Items: React.FunctionComponent<Props> = props => {
  const classes = useStyles();
  function renderItems() {
    if (!props.viewer.items || !props.viewer.items.edges) {
      throw new Error('assertion failed');
    }
    return props.viewer.items.edges.map(edge => {
      const node = edge && edge.node;
      if (!node) throw new Error('assertion failed');
      return (
        <Grid key={node.id} item xs={12} sm={4} md={3} lg={2}>
          <Item item={node} />
        </Grid>
      );
    });
  }

  return (
    <div className={classes.itemContainer}>
      <Grid container spacing={1}>
        {renderItems()}
      </Grid>
    </div>
  );
};

export default createRefetchContainer(
  Items,
  {
    viewer: graphql`
      fragment Items_viewer on Viewer
        @argumentDefinitions(
          limit: { type: "Int", defaultValue: 2 } # Optional argument
        ) {
        items(first: $limit) @connection(key: "Items_items") {
          edges {
            node {
              id
              ...Item_item
            }
          }
        }
        id
      }
    `
  },
  graphql`
    query ItemsRefetchQuery($limit: Int) {
      viewer {
        ...Items_viewer @arguments(limit: $limit)
      }
    }
  `
);
