import express from 'express';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';
import { getAllNews, getNewsById, createNews, updateNews, deleteNews } from '../models/News.js';
import { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse } from '../models/Course.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// Todas as rotas requerem autenticação e admin
router.use(authenticateToken);
router.use(requireAdmin);

// ========== NEWS ROUTES ==========

// Get all news (including unpublished)
router.get('/news', async (req, res) => {
  try {
    const news = await getAllNews(false);
    res.json(news);
  } catch (error) {
    console.error('Admin get news error:', error);
    res.status(500).json({ error: 'Erro ao buscar notícias' });
  }
});

// Create news
router.post('/news', [
  body('title').notEmpty().withMessage('Título é obrigatório'),
  body('content').notEmpty().withMessage('Conteúdo é obrigatório')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newsData = {
      ...req.body,
      authorId: req.user.id
    };
    const news = await createNews(newsData);
    res.status(201).json(news);
  } catch (error) {
    console.error('Admin create news error:', error);
    res.status(500).json({ error: 'Erro ao criar notícia' });
  }
});

// Update news
router.put('/news/:id', async (req, res) => {
  try {
    const news = await updateNews(req.params.id, req.body);
    if (!news) {
      return res.status(404).json({ error: 'Notícia não encontrada' });
    }
    res.json(news);
  } catch (error) {
    console.error('Admin update news error:', error);
    res.status(500).json({ error: 'Erro ao atualizar notícia' });
  }
});

// Delete news
router.delete('/news/:id', async (req, res) => {
  try {
    const deleted = await deleteNews(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Notícia não encontrada' });
    }
    res.json({ message: 'Notícia deletada com sucesso' });
  } catch (error) {
    console.error('Admin delete news error:', error);
    res.status(500).json({ error: 'Erro ao deletar notícia' });
  }
});

// ========== COURSES ROUTES ==========

// Get all courses (including unpublished)
router.get('/courses', async (req, res) => {
  try {
    const courses = await getAllCourses(false);
    res.json(courses);
  } catch (error) {
    console.error('Admin get courses error:', error);
    res.status(500).json({ error: 'Erro ao buscar cursos' });
  }
});

// Create course
router.post('/courses', [
  body('name').notEmpty().withMessage('Nome é obrigatório'),
  body('type').isIn(['profissional', 'cef', 'outro']).withMessage('Tipo inválido')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const course = await createCourse(req.body);
    res.status(201).json(course);
  } catch (error) {
    console.error('Admin create course error:', error);
    res.status(500).json({ error: 'Erro ao criar curso' });
  }
});

// Update course
router.put('/courses/:id', async (req, res) => {
  try {
    const course = await updateCourse(req.params.id, req.body);
    if (!course) {
      return res.status(404).json({ error: 'Curso não encontrado' });
    }
    res.json(course);
  } catch (error) {
    console.error('Admin update course error:', error);
    res.status(500).json({ error: 'Erro ao atualizar curso' });
  }
});

// Delete course
router.delete('/courses/:id', async (req, res) => {
  try {
    const deleted = await deleteCourse(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Curso não encontrado' });
    }
    res.json({ message: 'Curso deletado com sucesso' });
  } catch (error) {
    console.error('Admin delete course error:', error);
    res.status(500).json({ error: 'Erro ao deletar curso' });
  }
});

export default router;
