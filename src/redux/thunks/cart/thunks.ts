import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductType } from "../../../types/ProductType";

export const getCart = createAsyncThunk("cart/getCart", async () => {
    const res = await axios.get("http://localhost:3200/cart");
    const cart = res.data as ProductType[];
    return cart;
})

export const postCart = createAsyncThunk("cart/postCart", async (product: any) => {
    const res = await axios.post("http://localhost:3200/cart", product);

    if(res.data == "ERROR")
        alert("ALREADY ADDED TO CART");
    
    return res.data;
})

export const deleteCart = createAsyncThunk("cart/deleteCart", async (_id: string) => {
    const res = await axios.delete("http://localhost:3200/cart", { data: { _id } });
    return res.data;
})