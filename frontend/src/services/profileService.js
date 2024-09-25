import axios from 'axios';

const API_URL = 'https://todo-web-application-backend.onrender.com/api/profile/';

const getProfile = async () => {
  return axios.get(API_URL, {
    headers: { 'x-access-token': localStorage.getItem('token') }
  }).then(response => response.data);
};

const updateProfile = (profile) => {
  return axios.put(API_URL, profile, {
    headers: { 'x-access-token': localStorage.getItem('token') }
  });
};

const profileService = {
  getProfile,
  updateProfile
};

export default profileService;
