import { Request, Response } from "express";


export const login = (req: Request, res: Response) => {
    try {
        res.send('login');
    } catch (err) {
        return res.status(500).json(err);
    }
}