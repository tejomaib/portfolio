import React from 'react';
import BackButton from './BackButton'; // Import BackButton
import './Page.css';

function About() {
  return (
    <div className="page">
      <BackButton /> {/* Include BackButton */}
      <h1>About Me</h1>
    <p2>I am seeking an internship that will allow me to gain valuable experience in both software engineering and hardware fields, including chip and semiconductor design. With skills in Java, Python, JavaScript, HTML, CSS, C++, and React, I've gained experience in both dynamic web development and robust backend systems. I'm excited to tackle real-world challenges and apply my knowledge in a practical setting. I’m also passionate about hardware engineering, particularly semiconductor design. My hands-on work with breadboards and circuits has given me a solid foundation in hardware design and deepened my interest in chip design. This practical experience has fueled my enthusiasm for exploring more in this field. An ideal internship would provide a mix of software and hardware projects, challenging my problem-solving skills and allowing me to collaborate with experienced professionals. I'm looking for a role in a supportive environment that values creativity and critical thinking. This opportunity would help me refine my skills, build meaningful connections, and grow as a well-rounded engineer ready to tackle the challenges of the tech industry.</p2>
      </div>
  );
}

export default About;