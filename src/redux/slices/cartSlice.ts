import { createSlice } from '@reduxjs/toolkit'
import { ProductType } from '../../types/ProductType'
import { deleteCart, getCart, postCart } from '../thunks/cart/thunks'

export interface CartState {
    cart: ProductType[] | undefined,
}

const initialState: CartState = {
    cart: undefined
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.cart = action.payload;
        })

        builder.addCase(postCart.fulfilled, (state, action) => {
            state.cart?.push(action.payload);
        })

        builder.addCase(deleteCart.fulfilled, (state, action) => {
            state.cart = state.cart?.filter(item => item._id != action.payload);
        })
    }
})

export const { } = cartSlice.actions

export default cartSlice.reducer