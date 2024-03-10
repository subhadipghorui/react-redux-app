import { ActionType } from "../contants/action-types"

const initialState = {
    cartItems: []
}


export const cartReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionType.RESET_CART:
            return {};

        case ActionType.ADD_ITEM_TO_CART:
            const existingProductIndex = state.cartItems.findIndex(
                (item) => item.id === payload.id
              );
        
              if (existingProductIndex !== -1) {
                // Product already exists in the cart, increase quantity
                const updatedCartItems = state.cartItems.map((item, index) =>
                  index === existingProductIndex
                    ? { ...item, qt: item.qt + 1 }
                    : item
                );
        
                return {
                  ...state,
                  cartItems: updatedCartItems,
                };
              } else {
                // Product does not exist in the cart, add it
                return {
                  ...state,
                  cartItems: [...state.cartItems, { ...payload, qt: 1 }],
                };
              }

        case ActionType.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== payload),
            };
        default:
            return state;
    }
}
