import express from "express";
import { getProducts, deleteProducts, postProducts } from "../controllers/ProductController.js";

const router = express.Router();

router.route("/").get(getProducts).post(postProducts).delete(deleteProducts);

export default router;