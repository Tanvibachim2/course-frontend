import React from 'react';
import CreateCourseForm from './components/CreateCourseForm';
import CoursesList from './CoursesList';
import CreateCourseInstanceForm from './components/CreateInstanceForm.js';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>🎓 Course Manager</h1>
      <CreateCourseForm />
      <CoursesList />
      <CreateCourseInstanceForm />
    </div>
  );
}

export default App;
