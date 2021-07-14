import { Router } from 'express';
import cardsRouter from './cards/router';

const router = Router();

router.use('/card', cardsRouter);

export default router;
