import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateInstanceForm = () => {
  const [instanceData, setInstanceData] = useState({
    academicYear: '',
    semester: '',
    courseId: '',
  });

  const [courses, setCourses] = useState([]);

  // ✅ Fetch all courses on component load
  useEffect(() => {
    axios.get('http://localhost:8080/api/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const handleChange = (e) => {
    setInstanceData({
      ...instanceData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      academicYear: parseInt(instanceData.academicYear),
      semester: parseInt(instanceData.semester),
      course: {
        courseId: instanceData.courseId,
      },
    };

    try {
      await axios.post('http://localhost:8080/api/instances', payload);
      alert('✅ Course instance created!');
    } catch (err) {
      console.error(err);
      alert('❌ Failed to create course instance');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
      <h2>Create Course Instance</h2>

      <input
        name="academicYear"
        value={instanceData.academicYear}
        onChange={handleChange}
        placeholder="Academic Year"
        required
      /><br />

      <input
        name="semester"
        value={instanceData.semester}
        onChange={handleChange}
        placeholder="Semester"
        required
      /><br />

      <select
        name="courseId"
        value={instanceData.courseId}
        onChange={handleChange}
        required
      >
        <option value="">-- Select Course --</option>
        {courses.map((course) => (
          <option key={course.id} value={course.courseId}>
            {course.courseId} - {course.title}
          </option>
        ))}
      </select><br />

      <button type="submit">Add Instance</button>
    </form>
  );
};

export default CreateInstanceForm;
