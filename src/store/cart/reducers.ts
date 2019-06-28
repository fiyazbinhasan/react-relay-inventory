import { CartState, ADD_TO_CART, CartActionTypes } from './types';

const initialState: CartState = {
  items: []
};

export function cartReducer(
  state = initialState,
  action: CartActionTypes
): CartState {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
}
