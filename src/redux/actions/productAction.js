import { ActionType } from "../contants/action-types"

export const setProducts = (products) => {
    return {
        type: ActionType.SET_PRODUCT,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionType.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
      type: ActionType.REMOVE_SELECTED_PRODUCT,
    };
  };
