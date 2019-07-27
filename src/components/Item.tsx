import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Rating from '@material-ui/lab/Rating';

import { createFragmentContainer } from 'react-relay';
import { Item_item } from './__generated__/Item_item.graphql';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { addToCart } from '../store/cart/actions';
import { CartItemModel } from '../store/cart/types';
import { AppState } from '../store';

const graphql = require('babel-plugin-relay/macro');

interface Props {
  item: Item_item;
  addToCart: (cartItem: CartItemModel) => void;
  isLoggedIn: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textEllipsis: {
      display: '-webkit-box',
      lineClamp: 2,
      boxOrient: 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    media: {
      height: 256,
      display: 'block',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      boxShadow:
        '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0)',
      borderRadius: '4px'
    }
  })
);

export const Item: React.SFC<Props> = props => {
  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.media}
        style={{ backgroundImage: "url('http://lorempixel.com/256/256/')" }}
      />
      <div>
        <p className={classes.textEllipsis}>
          Timex Unisex Southview 41mm Premium Quality Leather Strap Watch
        </p>
        <Rating value={4} />
      </div>
    </div>
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
