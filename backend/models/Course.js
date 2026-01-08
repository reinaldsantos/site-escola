// Mock database - em produção, usar MongoDB, PostgreSQL, etc.
let courses = [
  {
    id: 1,
    name: 'Curso Profissional de Informática',
    type: 'profissional',
    duration: '3 anos',
    description: 'Curso profissional focado em desenvolvimento de software e sistemas.',
    published: true
  },
  {
    id: 2,
    name: 'Curso CEF de Eletricidade',
    type: 'cef',
    duration: '2 anos',
    description: 'Curso de educação e formação em instalações elétricas.',
    published: true
  }
];

let courseIdCounter = 3;

export const getAllCourses = async (publishedOnly = true) => {
  if (publishedOnly) {
    return courses.filter(c => c.published);
  }
  return courses;
};

export const getCourseById = async (id) => {
  return courses.find(c => c.id === parseInt(id));
};

export const createCourse = async (courseData) => {
  const newCourse = {
    id: courseIdCounter++,
    ...courseData
  };
  courses.push(newCourse);
  return newCourse;
};

export const updateCourse = async (id, courseData) => {
  const index = courses.findIndex(c => c.id === parseInt(id));
  if (index === -1) return null;
  
  courses[index] = {
    ...courses[index],
    ...courseData
  };
  return courses[index];
};

export const deleteCourse = async (id) => {
  const index = courses.findIndex(c => c.id === parseInt(id));
  if (index === -1) return false;
  
  courses.splice(index, 1);
  return true;
};

export default { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse };
