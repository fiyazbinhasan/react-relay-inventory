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
      height: 280,
      display: 'block',
      backgroundColor: '#ebe3cd30',
      backgroundSize: 200,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
      // boxShadow:
      //   '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0)',
      // borderRadius: '4px'
    }
  })
);

export const Item: React.SFC<Props> = props => {
  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.media}
        style={{
          backgroundImage:
            'url("https://d3d71ba2asa5oz.cloudfront.net/12021547/images/b1544-grn-1.jpg")'
        }}
      />
      <div>
        <p className={classes.textEllipsis}>{props.item.title}</p>
        {/* <p>
          <i>${props.item.sellingPrice}</i>
        </p> */}
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
