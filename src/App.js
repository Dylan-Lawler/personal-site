import React from 'react';
import Resume from './Resume';
import './App.css'; // Import the CSS file for styling
import profilePhoto from './profile.jpg';


function App() {
  return (
    <div className="app-container">
      <img
        src={profilePhoto}
        alt="Your Name"
        className="profile-photo"
      />
      <div className="resume-container">
        <Resume />
      </div>
    </div>
  );
}

export default App;
