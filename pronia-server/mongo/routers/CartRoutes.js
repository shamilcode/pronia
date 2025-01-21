import express from "express";
import { deleteCart, getCart, postCart } from "../controllers/CartController.js";

const router = express.Router();

router.route("/").get(getCart).post(postCart).delete(deleteCart);

export default router;