import { ActionType } from "../contants/action-types";
import fakestoreapi from "../../apis/fakeStoreApi";

export const fetchProducts = () => async (dispatch) => {
  //  Dispatch other action if you want
  //  Call the Api
  const response = await fakestoreapi.get("/products");

  // After succcess dispath the action with queried data
  dispatch({ type: ActionType.SET_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  //  Dispatch other action if you want
  //  Call the Api
  const response = await fakestoreapi.get(`/products/${id}`);

  // After succcess dispath the action with queried data
  dispatch({ type: ActionType.SELECTED_PRODUCT, payload: response.data });
};

export const setProducts = (products) => {
  return {
    type: ActionType.SET_PRODUCT,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionType.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionType.REMOVE_SELECTED_PRODUCT,
  };
};
