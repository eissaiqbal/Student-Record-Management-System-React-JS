import React, { useState, useEffect } from 'react';

const StudentForm = ({ onSave, editingId, onCancel, initialData }) => {
  const [formData, setFormData] = useState({ name: '', email: '', course: '', age: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(initialData || { name: '', email: '', course: '', age: '' });
    setErrors({});
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.course.trim()) newErrors.course = 'Course is required';
    if (!formData.age.trim()) newErrors.age = 'Age is required';
    else if (isNaN(formData.age) || formData.age < 1) newErrors.age = 'Enter valid age';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSave(formData);
      if (!editingId) setFormData({ name: '', email: '', course: '', age: '' });
    }
  };

  return (
    <div className="card form-card">
      <h2>{editingId ? '✏️ Edit Student' : '➕ Add New Student'}</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={errors.name ? 'error' : ''} placeholder="Enter full name" />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'error' : ''} placeholder="student@example.com" />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="course">Course</label>
            <input type="text" id="course" name="course" value={formData.course} onChange={handleChange} className={errors.course ? 'error' : ''} placeholder="e.g., Computer Science" />
            {errors.course && <span className="error-msg">{errors.course}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className={errors.age ? 'error' : ''} placeholder="20" min="1" />
            {errors.age && <span className="error-msg">{errors.age}</span>}
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">{editingId ? '✓ Update' : '✓ Save'}</button>
          {editingId && <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>}
        </div>
      </form>
    </div>
  );
};

export default StudentForm;