import * as types from "../actions/action-types/productActionTypes";
import initalState from "./initialState";

export default function productReducer(state = initalState, action) {
  let products = action.products;
  let totalResultCount = action.totalResultCount;
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return {
        products,
        totalResultCount,
      };
    case types.SEARCH_PRODUCTS_SUCCESS:
      return {
        products,
        totalResultCount,
      };
    case types.SORT_PRODUCTS_SUCCESS:
      return { products, totalResultCount };
    default:
      return state;
  }
}
