import { useState, useEffect } from 'react';
import api from '../../config/axios';
import AdminLayout from '../../components/Admin/AdminLayout';
import './News.css';

const AdminNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'inscricoes',
    image: '',
    published: true
  });

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await api.get('/admin/news');
      setNews(response.data);
    } catch (error) {
      console.error('Erro ao carregar notícias:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingNews) {
        await api.put(`/admin/news/${editingNews.id}`, formData);
      } else {
        await api.post('/admin/news', formData);
      }

      resetForm();
      fetchNews();
    } catch (error) {
      console.error('Erro ao salvar notícia:', error);
      alert('Erro ao salvar notícia');
    }
  };

  const handleEdit = (item) => {
    setEditingNews(item);
    setFormData({
      title: item.title,
      content: item.content,
      category: item.category,
      image: item.image || '',
      published: item.published
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Tem certeza que deseja deletar esta notícia?')) return;

    try {
      await api.delete(`/admin/news/${id}`);
      fetchNews();
    } catch (error) {
      console.error('Erro ao deletar notícia:', error);
      alert('Erro ao deletar notícia');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      category: 'inscricoes',
      image: '',
      published: true
    });
    setEditingNews(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <AdminLayout>
        <div style={{ padding: '2rem' }}>Carregando...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="admin-news">
        <div className="page-header-admin">
          <h1>Gerir Notícias</h1>
          <button onClick={() => setShowForm(true)} className="btn btn-primary">
            + Nova Notícia
          </button>
        </div>

        {showForm && (
          <div className="form-modal">
            <div className="form-modal-content">
              <h2>{editingNews ? 'Editar Notícia' : 'Nova Notícia'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Título</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Conteúdo</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows="5"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Categoria</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="inscricoes">Inscrições</option>
                    <option value="formacao">Formação</option>
                    <option value="eventos">Eventos</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>URL da Imagem</label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>
                    <input
                      type="checkbox"
                      checked={formData.published}
                      onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    />
                    Publicado
                  </label>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    {editingNews ? 'Atualizar' : 'Criar'}
                  </button>
                  <button type="button" onClick={resetForm} className="btn btn-secondary">
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="news-list-admin">
          {news.map(item => (
            <div key={item.id} className="news-item-admin">
              <div className="news-item-header">
                <h3>{item.title}</h3>
                <span className={`badge ${item.published ? 'published' : 'draft'}`}>
                  {item.published ? 'Publicado' : 'Rascunho'}
                </span>
              </div>
              <p className="news-item-category">{item.category}</p>
              <p className="news-item-content">{item.content.substring(0, 150)}...</p>
              <div className="news-item-actions">
                <button onClick={() => handleEdit(item)} className="btn btn-secondary btn-sm">
                  Editar
                </button>
                <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </div>
            </div>
          ))}

          {news.length === 0 && (
            <p style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
              Nenhuma notícia encontrada
            </p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminNews;
