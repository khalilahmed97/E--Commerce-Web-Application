import express from "express"
import {showProducts, addProduct, deleteAllProducts, deleteProduct } from "../controllers/cartController.js";
const router = express.Router();

router.route("/").get(showProducts)
router.route("/add/:id").post(addProduct);
router.route("/delete/:id").delete(deleteProduct);
router.route("/delete/all").delete(deleteAllProducts);


export default router;