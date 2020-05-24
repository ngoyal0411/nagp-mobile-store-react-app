import { handleResponse, handleError } from "./apiUtility";

const baseURL = "/products";

export function getProducts() {
  return fetch(baseURL).then(handleResponse).catch(handleError);
}

export function getFilteredProducts(searchValue) {
  return fetch(`${baseURL}?deviceName_like=${searchValue}`)
    .then(handleResponse)
    .catch(handleError);
}

