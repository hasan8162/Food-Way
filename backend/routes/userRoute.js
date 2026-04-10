import express from 'express';
import { register, login } from '../middleware/userController.js';

const userRouter = express.Router();
userRouter.post('/register', register)
userRouter.post('/login', login)

export default userRouter;