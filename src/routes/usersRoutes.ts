import { Router } from 'express';
import UsersController from '../controllers/usersController';
import UsersValidation from '../middlewares/usersMiddleware';

const router = Router();

const usersController = new UsersController();

router.post('/users', UsersValidation, usersController.create);

export default router;