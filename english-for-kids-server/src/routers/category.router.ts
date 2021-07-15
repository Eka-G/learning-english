import { Router } from 'express';
import createCategory from '../controllers/create-category';
import getCategories from '../controllers/get-categories';

const router = Router();

router.post('/', async (req, res) => {
  const { body } = req;

  try {
    const category = await createCategory({
      name: body.name,
      cardsId: body.cardsId,
    });

    return res.status(201).json({ data: category });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get('/allWithCards', async (_, res) => {
  try {
    const cards = await getCategories();
    return res.status(201).json({ data: cards });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
