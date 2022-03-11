import { ActionTypes } from "../constants/action-types";

export default function setProducts(products) {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
}

export default function selectedProducts(product) {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
}
