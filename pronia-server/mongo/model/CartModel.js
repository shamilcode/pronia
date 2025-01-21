import mongoose from "mongoose";

const CartSchema = mongoose.Schema({
    thumbnail: {type: String,required: false},
    title: {type: String,required: false},
    price: {type: Number,required: false},
})

const CartItem = mongoose.model("Cart",CartSchema);

export default CartItem;