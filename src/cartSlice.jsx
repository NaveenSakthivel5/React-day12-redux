import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},  
    reducers: {
        incrementCart: (state, action) => {
            const productId = action.payload;
            state[productId] = (state[productId] || 0) + 1;
        },
        decrementCart: (state, action) => {
            const productId = action.payload;
            state[productId] = Math.max((state[productId] || 0) - 1, 0);
        },
        totalPrice: (state, action) => {
        },
    },
});

export const { incrementCart, decrementCart, totalPrice } = cartSlice.actions;
export default cartSlice.reducer;