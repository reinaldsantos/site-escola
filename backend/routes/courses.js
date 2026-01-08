import express from 'express';
import { getAllCourses, getCourseById } from '../models/Course.js';

const router = express.Router();

// Get all published courses
router.get('/', async (req, res) => {
  try {
    const courses = await getAllCourses(true);
    res.json(courses);
  } catch (error) {
    console.error('Get courses error:', error);
    res.status(500).json({ error: 'Erro ao buscar cursos' });
  }
});

// Get course by ID
router.get('/:id', async (req, res) => {
  try {
    const course = await getCourseById(req.params.id);
    if (!course) {
      return res.status(404).json({ error: 'Curso não encontrado' });
    }
    res.json(course);
  } catch (error) {
    console.error('Get course by ID error:', error);
    res.status(500).json({ error: 'Erro ao buscar curso' });
  }
});

export default router;
