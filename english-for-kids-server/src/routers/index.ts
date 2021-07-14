import { Router } from 'express';
import cardsRouter from './cards.router';
import categoryRouter from './category.router';

const router = Router();

router.use('/card', cardsRouter);
router.use('/category', categoryRouter);

export default router;
