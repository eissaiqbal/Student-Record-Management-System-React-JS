import React from 'react';

const StudentList = ({ students, onEdit, onDelete }) => {
  const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  if (!students.length) {
    return <div className="card empty-state"><p>📚 No records yet. Add your first student!</p></div>;
  }

  return (
    <div className="card list-card">
      <h2>📋 Student Records <span className="badge">{students.length}</span></h2>
      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr><th>Student</th><th>Email</th><th>Course</th><th>Age</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td data-label="Student">
                  <div className="student-info">
                    <div className="avatar">{getInitials(student.name)}</div>
                    <div><strong>{student.name}</strong><small>ID: #{student.id.toString().slice(-4)}</small></div>
                  </div>
                </td>
                <td data-label="Email"><a href={`mailto:${student.email}`}>{student.email}</a></td>
                <td data-label="Course"><span className="course-tag">{student.course}</span></td>
                <td data-label="Age">🎂 {student.age}</td>
                <td data-label="Actions" className="actions">
                  <button className="btn btn-sm btn-edit" onClick={() => onEdit(student)} title="Edit">✏️</button>
                  <button className="btn btn-sm btn-delete" onClick={() => onDelete(student.id)} title="Delete">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;