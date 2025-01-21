import { createSlice } from '@reduxjs/toolkit'
import { ProductType } from '../../types/ProductType'
import { deleteProduct, getProducts, postProduct } from '../thunks/products/thunks'

export interface ProductState {
    products: ProductType[] | undefined,
    paginatedProducts: ProductType[] | undefined,
    length: number | undefined,
}

const initialState: ProductState = {
    products: undefined,
    paginatedProducts: undefined,
    length: undefined,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload.products;
            state.paginatedProducts = action.payload.paginatedProducts;
            state.length = action.payload.length;
        })

        builder.addCase(postProduct.fulfilled, (state, action) => {
            state.products?.push(action.payload);
        })

        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.products = state.products?.filter(item => item._id != action.payload);
        })
    }
})

export const { } = productsSlice.actions

export default productsSlice.reducer