import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState
})

console.log(cartSlice)

export default cartSlice.reducer;