import * as types from "../actions/action-types/cartActionTypes";
import initalState from "./initialState";

const cartReducer = (state = initalState.cart, action) => {
  if (action.type === types.ADD_TO_CART) {
    debugger;

    let item = [...state];
    let existed_item = item.find((item) => action.cartItem.id === item.id);

    if (existed_item) {
      let newQuantity = existed_item.quantity + 1;
      // return [...state.cart].map((item, index) => {
      //   if (item.id === action.cartItem.id) {
      //     return {
      //       ...item,
      //       quantity: newQuantity,
      //     };
      //   } else {
      //     return item;
      //   }
      // });
      let result = { ...existed_item, quantity: newQuantity };

      return [...state].map((cartDetails) =>
        cartDetails.id === action.cartItem.id ? result : cartDetails
      );
      // return [...state.cart].map((item, index) => {
      //   // Find the item with the matching id
      //   if (item.id === action.cartItem.id) {
      //     // Return a new object
      //     return {
      //       ...item, // copy the existing item
      //       quantity: newQuantity, // replace the email addr
      //     };
      //   } else {
      //     // Leave every other item unchanged
      //     return item;
      //   }
      // });
    } else {
      let newItem = action.cartItem;
      newItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + action.cartItem.price;

      return  [...state, { ...newItem }];
    }
  }
  if (action.type === types.REMOVE_ITEM) {
    let itemToRemove = state.cart.find((item) => action.id === item.id);
    let new_items = state.cart.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      cart: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === types.ADD_QUANTITY) {
    let addedItem = state.products.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === types.SUBTRACT_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.carts.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        cart: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }

  //   if (action.type === ADD_SHIPPING) {
  //     return {
  //       ...state,
  //       total: state.total + 6,
  //     };
  //   }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }
};

export default cartReducer;
