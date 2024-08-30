import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems:cartItems ,
    amount: 0,
    total: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState
})

console.log(cartSlice)

export default cartSlice.reducer;