import React, { useState } from 'react';
import { createCourse } from '../services/api';

const CreateCourseForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    courseId: '',
    description: '',
    prerequisites: [],
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePrerequisiteChange = (e) => {
    setFormData(prev => ({
      ...prev,
      prerequisites: e.target.value.split(',').map(id => ({ courseId: id.trim() }))
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    console.log("Submitting:", formData); // ✅ Add this
    await createCourse(formData);
    alert('✅ Course created!');
    setFormData({ title: '', courseId: '', description: '', prerequisites: [] });
  } catch (err) {
    console.error(err);  // ✅ This will show exact error in browser console
    alert('❌ Failed to create course');
  }
};


  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
      <h2>Create a New Course</h2>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Course Title" required /><br />
      <input name="courseId" value={formData.courseId} onChange={handleChange} placeholder="Course ID (e.g. CS101)" required /><br />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Course Description" required /><br />
      <input onChange={handlePrerequisiteChange} placeholder="Prerequisites (comma-separated courseIds)" /><br />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default CreateCourseForm;
