import { createSelector, createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            let exitsItem = state.find(e => e.id == action.payload.id)
            if(exitsItem){
                console.log("existed")
                state[state.indexOf(exitsItem)].qt++
            }else{
                state.push({...action.payload, qt: 1})
            }
        },
        deleteItem: (state, action) => {
            state.splice(action.payload,1)
        }
    }

})
export default cartSlice.reducer

export const { addItem, deleteItem } = cartSlice.actions

export const getItemsSelector = createSelector(
    (state) => state.cart,
    (state) => state
);