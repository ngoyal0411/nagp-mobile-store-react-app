import {
  ADD_TO_CART,
  REMOVE_ITEM,
  CLEAR_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
} from "./action-types/cartActionTypes";

export const addToCart = (cartItem) => {
  return {
    type: ADD_TO_CART,
    cartItem,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};

export const subtractQuantity = (id) => {
  debugger;
  return {
    type: SUB_QUANTITY,
    id,
  };
};

export const increaseQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
