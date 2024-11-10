import React from 'react';
import BackButton from './BackButton'; // Import BackButton
import './Page.css';

function Projects() {
  // Project data
  const projects = [
    {
      title: "Anti Theft Bike Sensor",
      description:
        "Created a device that outputs a loud signal when a bike is lifted more than 3 feet off of the ground. On campus, the issue of bikes being placed in trees has only increased, impacting students as their daily commutes are compromised. A circuit was built using components such as an Arduino Uno, a mini breadboard, wires, and an ultrasonic distance sensor. In the future, I hope to add a feature to alert the bike owner through a cell signal when their bike is being tampered with."
    },
    {
      title: "Personal Website",
      description:
        "Developed a personal website to showcase my skills and talents through a modern tech stack comprising React.js, HTML, and CSS. The multi-page website includes my resume, contact information, games, and an about-me page. Future plans include adding animations, 3D rendering, and an AI chatbot."
    },
    {
      title: "Switch Reader using 7-Segment Display",
      description:
        "Designed a logic circuit on a DE10-lite FPGA Board that displays the switch number on a 7-segment display in hexadecimal. A priority encoder was implemented to show only the highest-numbered switch if multiple switches were activated, ensuring clear output. Display modifications were made for characters like 'B' to appear in lowercase as 'b' to avoid confusion with '8'."
    }
  ];

  return (
    <div className="projects-page">
      <BackButton /> {/* Include BackButton */}
      <div className="projects-content">
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            {index < projects.length - 1 && <hr />} {/* Divider between projects */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
