import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
    card: {
      maxWidth: 345
    },
    media: {
      height: 275
    },
    pullRight: {
      marginLeft: 'auto'
    },
    avatar: {
      backgroundColor: red[500]
    }
  })
);

export const Item: React.SFC<Props> = props => {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardMedia
          className={classes.media}
          image="http://lorempixel.com/400/400/"
          title="Paella dish"
        />
      </Card>
      <div>
        <p>Timex Unisex Southview 41mm Leather Strap Watch</p>
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
