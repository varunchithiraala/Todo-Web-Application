import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileService from '../../../services/profileService';
import './index.css';

const ProfileCard = () => {
  const [profile, setProfile] = useState({ name: '', email: '' });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const profileData = await profileService.getProfile();
    setProfile(profileData);
  };

  return (
    <div className="profile-card">
      <h2 className="profile-title">Profile</h2>
      <div className="profile-details">
        <p className="profile-info"><strong>Name:</strong> {profile.name}</p>
        <p className="profile-info"><strong>Email:</strong> {profile.email}</p>
      </div>
      <Link to="/edit-profile-card" className="profile-edit-link">Edit Profile</Link>
    </div>
  );
};

export default ProfileCard;
