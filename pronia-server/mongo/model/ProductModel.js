import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    thumbnail: {type: String,required: false},
    title: {type: String,required: false},
    price: {type: Number,required: false},
})

const ProductItem = mongoose.model("Product",ProductSchema);

export default ProductItem;