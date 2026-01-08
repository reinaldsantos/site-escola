import { useEffect, useState } from 'react';
import api from '../config/axios';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await api.get('/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Erro ao carregar cursos:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main>
        <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>
          <p>Carregando cursos...</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Formação</h1>
          <p>Descubra os nossos cursos profissionais e de educação e formação</p>
        </div>
      </section>

      <section className="courses-content">
        <div className="container">
          <div className="courses-intro">
            <h2>Oferta Formativa</h2>
            <p>
              Temos uma experiência de trinta anos de formação com elevados índices 
              de empregabilidade. Os nossos cursos são desenvolvidos em parceria com 
              empresas e adaptados às necessidades do mercado de trabalho.
            </p>
          </div>

          <div className="courses-grid">
            {courses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-badge">{course.type}</div>
                <h3>{course.name}</h3>
                <p className="course-duration">{course.duration}</p>
                <p className="course-description">{course.description}</p>
                <Link to={`/cursos/${course.id}`} className="btn btn-primary">
                  Saber mais
                </Link>
              </div>
            ))}
          </div>

          {courses.length === 0 && (
            <div className="no-courses">
              <p>Nenhum curso disponível no momento.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Courses;
