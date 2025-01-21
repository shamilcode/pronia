import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductType } from "../../../types/ProductType";

export const getProducts = createAsyncThunk("products/getProducts", async (page?: number) => {
    const res = await axios.get("http://localhost:3200/products");
    const products = res.data as ProductType[];

    return {
        products,
        paginatedProducts: page ? products.slice(page * 4, (page * 4) + 4) : products.slice(0, 4),
        length: products.length
    }
})

export const postProduct = createAsyncThunk("products/postProduct", async (product: any) => {
    const res = await axios.post("http://localhost:3200/products", product);
    return res.data;
})

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (_id: string) => {
    const res = await axios.delete("http://localhost:3200/products", { data: { _id } });
    return res.data;
})