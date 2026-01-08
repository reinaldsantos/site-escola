import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AdminLayout from '../../components/Admin/AdminLayout';
import { useEffect, useState } from 'react';
import api from '../../config/axios';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    news: 0,
    courses: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [newsRes, coursesRes] = await Promise.all([
        api.get('/admin/news'),
        api.get('/admin/courses')
      ]);
      setStats({
        news: newsRes.data.length,
        courses: coursesRes.data.length
      });
    } catch (error) {
      console.error('Erro ao carregar estatísticas:', error);
    }
  };

  return (
    <AdminLayout>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <p className="welcome">Bem-vindo, {user?.name || user?.email}!</p>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Notícias</h3>
            <p className="stat-number">{stats.news}</p>
            <Link to="/admin/news" className="stat-link">
              Gerir notícias →
            </Link>
          </div>

          <div className="stat-card">
            <h3>Cursos</h3>
            <p className="stat-number">{stats.courses}</p>
            <Link to="/admin/courses" className="stat-link">
              Gerir cursos →
            </Link>
          </div>
        </div>

        <div className="quick-actions">
          <h2>Ações Rápidas</h2>
          <div className="actions-grid">
            <Link to="/admin/news" className="action-card">
              <h3>Nova Notícia</h3>
              <p>Criar e publicar uma nova notícia</p>
            </Link>
            <Link to="/admin/courses" className="action-card">
              <h3>Novo Curso</h3>
              <p>Adicionar um novo curso à oferta formativa</p>
            </Link>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
