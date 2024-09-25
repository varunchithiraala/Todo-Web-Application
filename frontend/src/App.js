import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import TodoList from './components/Todo/TodoList';
import ProfileCard from './components/Profile/ProfileCard';
import EditProfileCard from './components/Profile/EditProfileCard';
import PrivateRoute from './utils/PrivateRoute';
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todos" element={<PrivateRoute component={TodoList} />} />
          <Route path="/profile-card" element={<PrivateRoute component={ProfileCard} />} />
          <Route path="/edit-profile-card" element={<PrivateRoute component={EditProfileCard} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
