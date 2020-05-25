import { handleResponse, handleError } from "./apiUtility";

const baseURL = "/products";

export function getProducts(pageNumber, limit) {
  return fetch(`${baseURL}?_page=${pageNumber}&_limit=${limit}`)
    .then(handleResponse)
    .catch(handleError);
}

export function getFilteredProducts(searchValue, pageNumber, limit) {
  return fetch(
    `${baseURL}?deviceName_like=${searchValue}&_page=${pageNumber}&_limit=${limit}`
  )
    .then(handleResponse)
    .catch(handleError);
}
