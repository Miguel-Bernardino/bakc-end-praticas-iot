import { Router } from 'express';
import * as userController from '../controllers/userController';

const router = Router();

router.post('/login', userController.attemptToLogUser);
router.post('/register', userController.attemptToRegisterUser);

export default router;