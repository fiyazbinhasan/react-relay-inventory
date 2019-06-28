import { ADD_TO_CART, CartItemModel, CartActionTypes } from './types';

export function addToCart(cartItem: CartItemModel): CartActionTypes {
  return {
    type: ADD_TO_CART,
    payload: cartItem
  };
}
