import {        Router         } from 'express';
import { LogUser, RegisterUser } from '../controllers/userController';

const router = Router();

router.post('/login', LogUser);
router.post('/register', RegisterUser);

export default router;