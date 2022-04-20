import { Request, Response } from "express"
import { CreateProductType, UpdateProductBodyType, UpdateProductParamsType } from "../schemas/productSchema";

export const createProduct = (req: Request<unknown, unknown, CreateProductType>, res: Response) => {

    try {
        res.send('creating...')
    } catch (err) {
        return res.status(500).json(err);
    }

}

export const updateProduct = (req: Request<UpdateProductParamsType, unknown, UpdateProductBodyType>, res: Response) => {

    try {
        res.send('updating...')
    } catch (err) {
        return res.status(500).json(err);
    }

}
