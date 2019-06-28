export interface CartItemModel {
  title: string;
  price: number;
  quantity: number;
  total?: number;
}
export interface CartState {
  items: CartItemModel[];
}

export const ADD_TO_CART = 'ADD_TO_CART';

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: CartItemModel;
}

export type CartActionTypes = AddToCartAction;
