import express from 'express';
import catRouter from './routes/cat-router';
import userRouter from './routers/users-router';

const router = express.Router();

router.use('/cats', catRouter);
router.use('/users', userRouter);

export default router;