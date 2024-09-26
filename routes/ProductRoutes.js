import { createProduct, getAllProducts, deleteProduct, updateProduct  } from "../controllers/Product.js";
import { Router} from "express";

const router = Router();

router.post("/products/create", createProduct);
router.get("/products", getAllProducts);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id/update_quantity", updateProduct);


export default router;