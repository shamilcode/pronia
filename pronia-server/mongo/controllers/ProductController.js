import ProductItem from "../model/ProductModel.js";

export const getProducts = async (req, res) => {
    try {
        const products = await ProductItem.find();
        res.json(products);
    } catch (error) {
        console.log(error);
    }
}

export const postProducts = async (req, res) => {
    try {
        await ProductItem.create(req.body);
        res.json(req.body);
    } catch (error) {
        console.log(error);
    }
}

export const deleteProducts = async (req, res) => {
    try {
        await ProductItem.findByIdAndDelete(req.body._id);
        res.json(req.body._id)
    } catch (error) {
        console.log(error);
    }
}