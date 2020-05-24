import * as types from "../actions/action-types/cartActionTypes";
import initalState from "./initialState";
import {
  addItemToCart,
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../helper/cartHelper/CartHelper";

const cartReducer = (state = initalState.cart, action) => {
  if (action.type === types.ADD_TO_CART) {
    return addItemToCart(state, action.cartItem);
  }
  if (action.type === types.REMOVE_ITEM) {
    return removeItemFromCart(state, action.id);
  }
  if (action.type === types.SUB_QUANTITY) {
    return decreaseQuantity(state, action.id);
  }
  if (action.type === types) {
    return removeItemFromCart(state, action.id);
  }
  if (action.type === types.ADD_QUANTITY) {
    return increaseQuantity(state, action.id);
  }
  if (action.type === types.CLEAR_CART) {
    return [];
  }

  //   if (action.type === ADD_SHIPPING) {
  //     return {
  //       ...state,
  //       total: state.total + 6,
  //     };
  //   }
  else {
    return state;
  }
};

export default cartReducer;
