import axios from 'axios';

const API_URL = 'http://localhost:5000/api/todos/';

const createTodo = (todo) => {
  return axios.post(API_URL, todo, {
    headers: { 'x-access-token': localStorage.getItem('token') }
  });
};

const getTodos = () => {
  return axios.get(API_URL, {
    headers: { 'x-access-token': localStorage.getItem('token') }
  }).then(response => response.data);
};

const updateTodo = (id, todo) => {
  return axios.put(`${API_URL}${id}`, todo, {
    headers: { 'x-access-token': localStorage.getItem('token') }
  });
};

const deleteTodo = (id) => {
  return axios.delete(`${API_URL}${id}`, {
    headers: { 'x-access-token': localStorage.getItem('token') }
  });
};

const todoService = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
};

export default todoService;
