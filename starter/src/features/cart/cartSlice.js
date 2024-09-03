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
        }
      },
    
})


export default cartSlice.reducer;
export const {clearCart,removeItem} = cartSlice.actions;