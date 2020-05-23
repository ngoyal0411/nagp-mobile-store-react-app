import * as types from "./action-types/productActionTypes";
import * as productApi from "../../api/productApi";

export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

export function searchProductsSuccess(products) {
  return { type: types.SEARCH_PRODUCTS_SUCCESS, products };
}

export function sortProductsSuccess(products) {
  return { type: types.SORT_PRODUCTS_SUCCESS, products };
}

export function loadProducts() {
  return function (dispatch) {
    return productApi
      .getProducts()
      .then((products) => {
        dispatch(loadProductsSuccess(products));
      })
      .catch((error) => {
        //dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function searchProducts(searchValue) {
  return function (dispatch) {
    return productApi
      .getFilteredProducts(searchValue)
      .then((products) => {
        dispatch(searchProductsSuccess(products));
      })
      .catch((error) => {
        //dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function sortProducts(order) {
  return function (dispatch) {
    return productApi
      .sortProductsBasedOnPrice(order)
      .then((products) => {
        dispatch(sortProductsSuccess(products));
      })
      .catch((error) => {
        //dispatch(apiCallError(error));
        throw error;
      });
  };
}
