import express from 'express';
import {getUser, getUserById, postUser, putUser, deleteUser} from '../controllers/users-controller.js';

const userRouter = express.Router();

userRouter.route('/').get(getUser).post(postUser);
userRouter.route('/:id').get(getUserById).post(postUser).put(putUser).delete(deleteUser);

export default userRouter;