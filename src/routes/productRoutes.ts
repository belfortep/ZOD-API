import { Router } from "express";
import { createProduct, updateProduct } from "../controllers/productController";
import { schemaValidation } from "../middlewares/schemaValidator";
import { CreateProductSchema, UpdateProductSchema } from "../schemas/productSchema";

const router = Router();

router.post('/products', schemaValidation(CreateProductSchema), createProduct);
router.put('/products/:id', schemaValidation(UpdateProductSchema), updateProduct)

export default router