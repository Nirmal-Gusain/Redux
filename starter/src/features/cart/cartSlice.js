import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";


const initialState = {
    cartItems:cartItems ,
    amount: 1,
    total: 1000,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
          state.cartItems = [];
        },
        removeItem:(state,action)=>{
          const ItemId  = action.payload;
          state.cartItems = state.cartItems.filter((item)=>item.id !== ItemId)
        },
        increase:(state,{payload})=>{
          const cartItems = state.cartItems.find((item)=>item.id === payload.id)
          cartItems.amount = cartItems.amount + 1
        },
        decrease:(state,{payload})=>{
          const cartItems = state.cartItems.find((item)=>item.id === payload.id)
          cartItems.amount = cartItems.amount - 1
        }
      },
    
})


export default cartSlice.reducer;
export const {clearCart,removeItem,increase,decrease} = cartSlice.actions;