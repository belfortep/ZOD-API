import { Router } from 'express';
import { login } from '../controllers/authController';
import { schemaValidation } from '../middlewares/schemaValidator';
import { loginSchema } from '../schemas/authSchema';
const router = Router();

router.post('/login', schemaValidation(loginSchema), login);

export default router;