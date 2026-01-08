import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import News from './pages/News';
import Contacts from './pages/Contacts';
import AdminLogin from './pages/Admin/Login';
import AdminDashboard from './pages/Admin/Dashboard';
import AdminNews from './pages/Admin/News';
import AdminCourses from './pages/Admin/Courses';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Rota de login admin (sem header/footer) */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Rotas admin protegidas */}
            <Route path="/admin/*" element={
              <PrivateRoute>
                <Routes>
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="news" element={<AdminNews />} />
                  <Route path="courses" element={<AdminCourses />} />
                  <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
                </Routes>
              </PrivateRoute>
            } />

            {/* Rotas públicas (com header/footer) */}
            <Route path="/*" element={
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/sobre" element={<About />} />
                  <Route path="/cursos" element={<Courses />} />
                  <Route path="/noticias" element={<News />} />
                  <Route path="/contactos" element={<Contacts />} />
                </Routes>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;