import * as types from "../actions/action-types/productActionTypes";
import initalState from "./initialState";

export default function productReducer(state = initalState.products, action) {
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return action.products;
    case types.SEARCH_PRODUCTS_SUCCESS:
      return action.products;
    case types.SORT_PRODUCTS_SUCCESS:
      debugger;
      return action.products;
    default:
      return state;
  }
}
