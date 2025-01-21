import CartItem from "../model/CartModel.js";

export const getCart = async (req, res) => {
    try {
        const cart = await CartItem.find();
        res.json(cart);
    } catch (error) {
        console.log(error);
    }
}

export const postCart = async (req, res) => {
    try {
        await CartItem.create(req.body);
        res.json(req.body);
    } catch (error) {
        console.log(error);
        res.json("ERROR")
    }
}

export const deleteCart = async (req, res) => {
    try {
        await CartItem.findByIdAndDelete(req.body._id);
        res.json(req.body._id)
    } catch (error) {
        console.log(error);
    }
}