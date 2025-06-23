import axios from 'axios';

const API_BASE = 'http://localhost:8080/api';

export const createCourse = (courseData) =>
  axios.post(`${API_BASE}/courses`, courseData);

export const getCourses = () =>
  axios.get(`${API_BASE}/courses`);

export const createInstance = (data) =>
  axios.post(`${API_BASE}/instances`, data);
