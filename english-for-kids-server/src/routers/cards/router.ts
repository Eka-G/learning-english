import { Router } from 'express';
import createCard from '../../controllers/create-cards';

const router = Router();

router.post('/', async (req, res) => {
  const { body } = req;

  try {
    const card = await createCard({
      word: body.word,
      translation: body.translation,
      image: body.image,
      audioSrc: body.audioSrc,
    });

    return res.status(201).json({ data: card });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
