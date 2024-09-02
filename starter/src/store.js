import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice"
import cartItems from "./cartItems";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})