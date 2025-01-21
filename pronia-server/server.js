import express from "express";
import cors from "cors";
import { connectDB } from "./mongo/config/connectDb.js";

// Routers
import ProductRouter from "./mongo/routers/ProductRoutes.js";
import CartRouter from "./mongo/routers/CartRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/products",ProductRouter);
app.use("/cart",CartRouter);

connectDB();

app.listen(3200,() => {
    console.log("Started Listening");
})