import React from 'react';
import BackButton from './BackButton'; // Import BackButton component
import './Resume.css';

function Resume() {
  return (
    <div className="resume-page">
      <BackButton /> {/* Include BackButton */}
      {/* <div className="sidebar">
       <ul>
       <li><a href="#education">Education</a></li>
        <li><a href="#work-experience">Work Experience</a></li>
         <li><a href="#activities">Activities</a></li>
         <li><a href="#certifications">Certifications</a></li>
         <li><a href="#additional-info">Additional Information</a></li>
       </ul>
     </div> */}
      <div className="resume-content">
        <h1>Resume</h1>
        <section id="education" className="resume-section">
          <h2>Education</h2>
          <p>Coppell High School: High School Diploma, 2023</p>
          <p>Texas A&M University: Bachelor's Degree in Electronic Systems Engineering Technology and Computer Science Minor, 2027</p>
        </section>
        <section id="work-experience" className="resume-section">
          <h2>Work Experience</h2>
          <p>Student Worker at KD College Prep, January 2022 - August 2023</p>
          <p>Student Instructor at Raagaleena Dance Company, June 2017 - August 2020</p>
          <p>Tutor at Vignana Vihara School, June 2017 - August 2024</p>
        </section>
        <section id="activities" className="resume-section">
          <h2>Activities</h2>
          <p>Member in TAMU WIRED VEX U Robotics, August 2024 - Present</p>
          <p>Member in The Institute of Electrical and Electronic Engineers, August 2024 - Present</p>
          <p>Public Relations Officer for the Society of Women Engineers, August 2023 - May 2024</p>
          <p>Social Media Officer for TAMU Hindu Youth for Unity, Virtue, and Action, August 2023 - May 2024</p>
          <p>Volunteer for UNICEF, August 2020 - May 2023</p>
          <p>Competitor in the Business Professionals of America Conference, August 2020 - May 2021</p>
          <p>Member in Coppell Varsity Choir, August 2019 - May 2023</p>
        </section>
        <section id="relevant-coursework" className="resume-section">
          <h2>Relevant Coursework</h2>
          <p>Intro to Python, Digital Electronics (In Progess), Circuit Analysis (In Progress), Embedded Systems Development in C (In Progress), Program Design & Concepts (In Progress), Power Systems and Circuit Applications (Plan to Take), and Microcontroller Architecture (Plan to Take)</p>
        </section>
        <section id="certifications" className="resume-section">
          <h2>Certifications</h2>
          <p>Microsoft Word Expert (Microsoft 365 Apps and Office 2019), January 2021</p>
          <p>Microsoft Office Specialist: Associate (Microsoft 365 Apps and Office 2019), January 2021</p>
          <p>Microsoft PowerPoint (Microsoft 365 Apps and Office 2019), January 2021</p>
          <p>MTA: Introduction to Programming Using Python (Certified 2020), May 2020</p>
          <p>Microsoft Excel (Microsoft 365 Apps and Office 2019), May 2020</p>
          <p>Microsoft Word (Microsoft 365 Apps and Office 2019), December 2019</p>
        </section>
        <section id="additional-info" className="resume-section">
          <h2>Additional Info</h2>
          <p>Other Interests: Writing, Community Service, Photography, Singing, and Dancing</p>
          <p>Skills: Organization, Communication, Perseverance, Commitment; Programming: Java, Python, JavaScript, HTML, CSS, C++, and React</p>
          <p>Languages: English, Telugu, and Spanish (Conversational), and Hindi (Conversational)</p>
        </section>
      </div>
    </div>
  );
}

export default Resume;