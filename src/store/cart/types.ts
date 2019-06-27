  export interface CartState {
    totalItemCount: number
  }
  
  export const ADD_TO_CART = 'ADD_TO_CART';
  
  interface AddToCartAction {
    type: typeof ADD_TO_CART;
  }
  
  export type CartActionTypes =
    | AddToCartAction;
  