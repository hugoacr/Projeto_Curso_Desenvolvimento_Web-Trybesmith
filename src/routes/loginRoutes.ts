import { Router } from 'express';
import LoginController from '../controllers/loginController';
import LoginValidation from '../middlewares/loginMiddleware';

const router = Router();

const loginController = new LoginController();

router.post('/login', LoginValidation, loginController.getAll);

export default router;