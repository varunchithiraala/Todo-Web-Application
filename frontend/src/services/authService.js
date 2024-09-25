import axios from 'axios';

const API_URL = 'https://todo-web-application-backend.onrender.com/api/auth/';

const signup = (data) => {
  return axios.post(`${API_URL}signup`, data);
};

const login = async (data) => {
  return axios.post(`${API_URL}login`, data)
    .then(response => {
      if (response.data.accessToken) {
        localStorage.setItem('token', response.data.accessToken);
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('token');
};

const authService = {
  signup,
  login,
  logout
};

export default authService;
