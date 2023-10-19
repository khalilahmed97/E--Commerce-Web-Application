import express from "express"
import {showAllProducts, showSingleProduct, updateProduct, deleteProduct, addProduct} from "../controllers/productController.js"
const router = express.Router();

router.route("/").get(showAllProducts);
router.route("/:id").get(showSingleProduct);
router.route("/new").post(addProduct);
router.route("/update/:id").patch(updateProduct);
router.route("/delete/:id").delete(deleteProduct);


export default router;