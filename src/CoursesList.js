// src/CoursesList.js
import React, { useEffect, useState } from 'react';
import { getCourses } from './services/api';

export default function CoursesList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses()
      .then((res) => setCourses(res.data))
      .catch((err) => console.error("❌ Failed to fetch courses", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📚 All Courses</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Prerequisites</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.id}>
              <td>{c.courseId}</td>
              <td>{c.title}</td>
              <td>{c.description}</td>
              <td>{c.prerequisites.map(p => p.courseId).join(', ') || "None"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
