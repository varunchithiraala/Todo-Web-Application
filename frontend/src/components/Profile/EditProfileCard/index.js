import React, { useState, useEffect } from 'react';
import profileService from '../../../services/profileService';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './index.css';

const EditProfileCard = () => {
  const [profile, setProfile] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const fetchedProfile = await profileService.getProfile();
    setProfile({
      name: fetchedProfile.name,
      email: fetchedProfile.email,
      password: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!profile.password) {
      setError('Password cannot be empty.');
      return;
    }

    try {
      await profileService.updateProfile(profile);
      navigate('/profile-card');
    } catch (err) {
      setError('An error occurred while updating the profile. Please try again.');
    }
  };

  const handleCancel = () => {
    navigate('/profile-card');
  };

  return (
    <div className="edit-profile-card">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <div className="password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              value={profile.password}
              onChange={(e) => setProfile({ ...profile, password: e.target.value })}
            />
            <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="button-group">
          <button type="submit" className="save-button">Save</button>
          <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileCard;
