import express from 'express';
import {listAllCats,getCatById,postCat,updateCat,deleteCat,
} from '../controllers/cat-controller.js';

const catRouter = express.Router();

catRouter.route('/').get(listAllCats).post(postCat);

catRouter.route('/:id').get(getCatById).put(updateCat).post(postCat).delete(deleteCat);

export default catRouter;