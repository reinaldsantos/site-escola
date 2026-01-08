import { useState, useEffect } from 'react';
import api from '../../config/axios';
import AdminLayout from '../../components/Admin/AdminLayout';
import './Courses.css';

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    type: 'profissional',
    duration: '',
    description: '',
    published: true
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await api.get('/admin/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Erro ao carregar cursos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCourse) {
        await api.put(`/admin/courses/${editingCourse.id}`, formData);
      } else {
        await api.post('/admin/courses', formData);
      }

      resetForm();
      fetchCourses();
    } catch (error) {
      console.error('Erro ao salvar curso:', error);
      alert('Erro ao salvar curso');
    }
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setFormData({
      name: course.name,
      type: course.type,
      duration: course.duration,
      description: course.description,
      published: course.published
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Tem certeza que deseja deletar este curso?')) return;

    try {
      await api.delete(`/admin/courses/${id}`);
      fetchCourses();
    } catch (error) {
      console.error('Erro ao deletar curso:', error);
      alert('Erro ao deletar curso');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      type: 'profissional',
      duration: '',
      description: '',
      published: true
    });
    setEditingCourse(null);
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
      <div className="admin-courses">
        <div className="page-header-admin">
          <h1>Gerir Cursos</h1>
          <button onClick={() => setShowForm(true)} className="btn btn-primary">
            + Novo Curso
          </button>
        </div>

        {showForm && (
          <div className="form-modal">
            <div className="form-modal-content">
              <h2>{editingCourse ? 'Editar Curso' : 'Novo Curso'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Nome do Curso</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Tipo</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    required
                  >
                    <option value="profissional">Profissional</option>
                    <option value="cef">CEF</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Duração</label>
                  <input
                    type="text"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="ex: 3 anos"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Descrição</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows="5"
                    required
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
                    {editingCourse ? 'Atualizar' : 'Criar'}
                  </button>
                  <button type="button" onClick={resetForm} className="btn btn-secondary">
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="courses-list-admin">
          {courses.map(course => (
            <div key={course.id} className="course-item-admin">
              <div className="course-item-header">
                <h3>{course.name}</h3>
                <span className={`badge ${course.published ? 'published' : 'draft'}`}>
                  {course.published ? 'Publicado' : 'Rascunho'}
                </span>
              </div>
              <p className="course-item-type">{course.type.toUpperCase()}</p>
              <p className="course-item-duration">Duração: {course.duration}</p>
              <p className="course-item-description">{course.description}</p>
              <div className="course-item-actions">
                <button onClick={() => handleEdit(course)} className="btn btn-secondary btn-sm">
                  Editar
                </button>
                <button onClick={() => handleDelete(course.id)} className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </div>
            </div>
          ))}

          {courses.length === 0 && (
            <p style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
              Nenhum curso encontrado
            </p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminCourses;
