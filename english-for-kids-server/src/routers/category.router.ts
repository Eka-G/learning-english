import { Router } from 'express';
import createCategory from '../controllers/create-category';
import getCategories from '../controllers/get-categories';
import updateCategory from '../controllers/update-category';
import deleteCategory from '../controllers/delete-category';

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

router.get('/', async (req, res) => {
  const { category } = req.query;

  try {
    const cards = await getCategories(category as string | undefined);
    return res.status(201).json({ data: cards });
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

router.put('/', async (req, res) => {
  const { body } = req;

  try {
    const category = await updateCategory(body.prevName, body.newName);
    return res.status(201).json({ data: category });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

router.delete('/', async (req, res) => {
  const { body } = req;

  try {
    const category = await deleteCategory(body.name);
    return res.status(201).json({ data: category });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

export default router;
