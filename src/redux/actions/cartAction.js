import { ActionType } from "../contants/action-types";


export const resetCart = (products) => {
    return {
        type: ActionType.RESET_CART,
      };
};

export const fetchCart = () => {
  return {
    type: ActionType.FETCH_CART,
  };
};

export const addToCart = (product) => {
  return {
    type: ActionType.ADD_ITEM_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product_id) => {
  return {
    type: ActionType.REMOVE_ITEM_FROM_CART,
    payload: product_id,
  };
};
