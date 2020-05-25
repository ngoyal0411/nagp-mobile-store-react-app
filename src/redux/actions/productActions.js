import * as types from "./action-types/productActionTypes";
import * as productApi from "../../api/productApi";

export function loadProductsSuccess(products, totalResultCount) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products, totalResultCount };
}

export function searchProductsSuccess(products, totalResultCount) {
  return { type: types.SEARCH_PRODUCTS_SUCCESS, products, totalResultCount };
}

export function sortProductsSuccess(products, totalResultCount) {
  return { type: types.SORT_PRODUCTS_SUCCESS, products, totalResultCount };
}

export function loadProducts(pageNumber, limit) {
  return function (dispatch) {
    return productApi
      .getProducts(pageNumber, limit)
      .then((response) => {
        let total = 0;
        for (var pair of response.headers.entries()) {
          if (pair[0] === "x-total-count") {
            total = pair[1];
          }
        }
        response.json().then((data) => {
          dispatch(loadProductsSuccess(data, total));
        });
      })

      .catch((error) => {
        throw error;
      });
  };
}

export function searchProducts(searchValue, pageNumber, limit) {
  return function (dispatch) {
    return productApi
      .getFilteredProducts(searchValue, pageNumber, limit)
      .then((response) => {
        let total = 0;
        for (var pair of response.headers.entries()) {
          if (pair[0] === "x-total-count") {
            total = pair[1];
          }
        }
        response.json().then((data) => {
          dispatch(searchProductsSuccess(data, total));
        });
      })

      .catch((error) => {
        throw error;
      });
  };
}

export function sortProducts(products, total) {
  return function (dispatch) {
    dispatch(sortProductsSuccess(products, total));
  };
}
