import React from 'react';
import './Home.css'; // Import CSS for Home component
import picture from '../components/picture.jpg';

function Home() {
  return (
    <div className="page home">
      <div className="tabs">
            <a className="tab" href="#/about">About Me</a>
        <a className="tab" href="#/resume">Resume</a>
        <a className="tab" href="#/projects">Projects</a>
        <a className="tab" href="#/contact">Contact Info</a>
      </div>
      <div className="content">
        <div className="profile-picture"></div>
        <img src={picture} alt="picture" className="picture" />
        <h1>Tejomai Buyyanapragada</h1>
        <p>Sophomore at Texas A&M University</p>
      </div>
    </div>
  );
}

export default Home;