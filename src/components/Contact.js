import React from 'react';
import BackButton from './BackButton'; // Import BackButton
import './Page.css';
import ContactImage from './ContactImage';
import pictureMail from '../components/gmail.jpg';
import pictureLinkedIn from '../components/linkedIn.jpg';
import pictureInstagram from '../components/instagram.jpg';
import pictureGitHub from '../components/github.jpg';

function Contact() {
  return (
    <div className="page">
      <BackButton /> {/* Include BackButton */}
      <h1>Contact Information</h1>
      <ContactImage
      src = {pictureMail}
      alt = "mail"
      link = "mailto:tejbuyyana@gmail.com"
      />
       <ContactImage
      src = {pictureLinkedIn}
      alt = "linkedIn"
      link = "https://www.linkedin.com/in/tejomai-buyyanapragada/"
      />
      <ContactImage
      src = {pictureInstagram}
      alt = "instagram"
      link = "https://www.instagram.com/tejomai_/?igsh=NzFyN3BxbmExODB3&utm_source=qr"
      />
      <ContactImage
      src = {pictureGitHub}
      alt = "github"
      link = "https://github.com/tejomaib"
      />

    </div>
  );
}

export default Contact;