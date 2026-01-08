import express from 'express';
import { getAllNews, getNewsById } from '../models/News.js';

const router = express.Router();

// Get all published news
router.get('/', async (req, res) => {
  try {
    const news = await getAllNews(true);
    res.json(news);
  } catch (error) {
    console.error('Get news error:', error);
    res.status(500).json({ error: 'Erro ao buscar notícias' });
  }
});

// Get news by ID
router.get('/:id', async (req, res) => {
  try {
    const news = await getNewsById(req.params.id);
    if (!news) {
      return res.status(404).json({ error: 'Notícia não encontrada' });
    }
    res.json(news);
  } catch (error) {
    console.error('Get news by ID error:', error);
    res.status(500).json({ error: 'Erro ao buscar notícia' });
  }
});

export default router;
