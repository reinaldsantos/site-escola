import bcrypt from 'bcryptjs';

// Mock database - em produção, usar MongoDB, PostgreSQL, etc.
const defaultPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'admin123', 10);

let users = [
  {
    id: 1,
    email: process.env.ADMIN_EMAIL || 'admin@epfundao.pt',
    password: defaultPassword,
    role: 'admin',
    name: 'Administrador'
  }
];

export const getUserByEmail = async (email) => {
  return users.find(u => u.email === email);
};

export const getUserById = async (id) => {
  return users.find(u => u.id === id);
};

export const createUser = async (userData) => {
  const newUser = {
    id: users.length + 1,
    ...userData,
    role: 'admin'
  };
  users.push(newUser);
  return newUser;
};

export default { getUserByEmail, getUserById, createUser };
