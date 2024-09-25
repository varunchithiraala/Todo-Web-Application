import React from 'react';
import './index.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Todo App</h1>
      <p className="home-description">
        Manage your tasks efficiently with our Todo application. 
        Create, edit, and delete tasks to stay organized and productive.
      </p>
      <div className="home-info">
        <h2>Features</h2>
        <ul className="feature-list">
          <li>📝 Create new tasks effortlessly</li>
          <li>✏️ Edit existing tasks anytime</li>
          <li>🗑️ Delete tasks you no longer need</li>
          <li>👁️ View all your tasks in one place</li>
        </ul>
      </div>
      <p className="home-footer">
        Start managing your tasks today and boost your productivity!
      </p>
    </div>
  );
}

export default Home;
