import { Router } from 'express';
import createCard from '../controllers/create-cards';
import getCards from '../controllers/get-catds';
import updateCard from '../controllers/update-card';
import deleteCard from '../controllers/delete-card';

const router = Router();

router.post('/', async (req, res) => {
  const { body } = req;

  try {
    const card = await createCard({
      categoryName: body.categoryName,
      word: body.word,
      translation: body.translation,
      image: body.image,
      audioSrc: body.audioSrc,
    });

    if (!card) return res.status(404).json({ error: "Card's category not found" });

    return res.status(201).json({ data: card });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get('/all', async (_, res) => {
  try {
    const cards = await getCards();
    return res.status(201).json({ data: cards });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.put('/', async (req, res) => {
  const { body } = req;

  try {
    const card = await updateCard(body.id, body.newCardInfo);
    return res.status(201).json({ data: card });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

router.delete('/', async (req, res) => {
  const { body } = req;

  try {
    const card = await deleteCard(body.categoryName, body.id);
    return res.status(201).json({ data: card });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

export default router;
