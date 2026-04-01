import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', course: 'Computer Science', age: 20 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', course: 'Information Technology', age: 22 },
  ]);
  const [editingId, setEditingId] = useState(null);

  const handleSaveStudent = (studentData) => {
    if (editingId) {
      setStudents(students.map(s => s.id === editingId ? { ...s, ...studentData } : s));
      setEditingId(null);
    } else {
      setStudents([...students, { ...studentData, id: Date.now() }]);
    }
  };

  const handleDeleteStudent = (id) => {
    if (window.confirm('Delete this student record?')) {
      setStudents(students.filter(s => s.id !== id));
    }
  };

  const handleEditStudent = (student) => {
    setEditingId(student.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎓 Student Record Management</h1>
        <p className="header-subtitle">Manage student information with ease</p>
      </header>

      <main className="main-content">
        <section className="form-section">
          <StudentForm
            onSave={handleSaveStudent}
            editingId={editingId}
            onCancel={() => setEditingId(null)}
            initialData={students.find(s => s.id === editingId)}
          />
        </section>

        <section className="list-section">
          <StudentList
            students={students}
            onEdit={handleEditStudent}
            onDelete={handleDeleteStudent}
          />
        </section>
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Student Management • Built with React ❤️</p>
      </footer>
    </div>
  );
}

export default App;