import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';

import { createFragmentContainer } from 'react-relay';
import { Item_item } from './__generated__/Item_item.graphql';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { addToCart } from '../store/cart/actions';
import { CartItemModel } from '../store/cart/types';
import { AppState } from '../store';
import { yellow } from '@material-ui/core/colors';

const graphql = require('babel-plugin-relay/macro');

interface Props {
  style?: any;
  item: Item_item;
  addToCart: (cartItem: CartItemModel) => void;
  isLoggedIn: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: 'rgba(255, 255, 255, 0.54)'
    },
    root: {
      background: '#ab47bc'
    }
  })
);

export const Item: React.SFC<Props> = props => {
  const classes = useStyles();
  return (
    <GridListTile style={{ ...props.style }}>
      <img src="http://lorempixel.com/225/300/" alt={props.item.title} />
      <GridListTileBar
        classes={{
          root: classes.root
        }}
        title={<span style={{ color: '#ffea00' }}>{props.item.title}</span>}
        subtitle={<span style={{ color: '#ffea00' }}>by: Stephen King</span>}
        actionIcon={
          <IconButton
            aria-label={`info about ${props.item.title}`}
            className={classes.icon}
          >
            <StarBorderIcon color="secondary" />
          </IconButton>
        }
      />
    </GridListTile>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addToCart: (cartItem: CartItemModel) => dispatch(addToCart(cartItem))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  createFragmentContainer(Item, {
    item: graphql`
      fragment Item_item on Item {
        title
        sellingPrice
      }
    `
  })
);
