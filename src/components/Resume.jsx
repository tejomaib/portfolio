import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

function Resume() {
    return (
        <Container sx = {{mt:4}}>
            <section id="education">
              <Box sx = {{borderBottom: '2px solid #FAF1E9', pb:1, mb:2, textAlign: 'center',}}>
                <Typography variant="h4" align="center" gutterBottom>
                    Education
                </Typography>
              </Box>
                
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Coppell High School: High School Diploma</Typography>
                    <Typography variant="body1">May 2023</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">
                        Texas A&M University: Bachelor's Degree in Electronic Systems Engineering Technology
                    </Typography>
                    <Typography variant="body1">May 2027</Typography>
                </Box>
                <Typography>and Cybersecurity Minor</Typography>
            </section>
            <br></br>
            <section id="work-experience">
            <Box sx = {{borderBottom: '2px solid #FAF1E9', pb:1, mb:2, textAlign: 'center',}}>
                <Typography variant="h4" align="center" gutterBottom>
                    Work Experience
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Undergraduate Teaching Assistant at Texas A&M University</Typography>
                    <Typography variant="body1">Aug 2026 - Present</Typography>
                </Box>
              <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Embedded Software Intern at Analog Devices</Typography>
                    <Typography variant="body1">May 2026 - Aug 2026</Typography>
                </Box>
              <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Undergraduate Researcher at Texas A&M University</Typography>
                    <Typography variant="body1">Aug 2025 - Dec 2025</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Student Worker at KD College Prep</Typography>
                    <Typography variant="body1">Jan 2022 - Aug 2023</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Student Instructor at Raagaleena Dance Academy</Typography>
                    <Typography variant="body1">Jun 2017 - Aug 2020</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Tutor at Vignana Vihara School</Typography>
                    <Typography variant="body1">Jun 2017 - Aug 2024</Typography>
                </Box>
            </section>
            <br></br>
            <section id="activities">
            <Box sx = {{borderBottom: '2px solid #FAF1E9', pb:1, mb:2, textAlign: 'center',}}>
                <Typography variant="h4" align="center" gutterBottom>
                    Activities
                </Typography>
              </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Hardware Engineer in TAMU RoboMasters</Typography>
                    <Typography variant="body1">Jan 2025 - Present</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Member in The Institute of Electrical and Electronic Engineers</Typography>
                    <Typography variant="body1">Aug 2024 - Present</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Public Relations Officer for the Society of Women Engineers</Typography>
                    <Typography variant="body1">Aug 2023 - May 2024</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Social Media Officer for TAMU Hindu Youth for Unity, Virtue, and Action</Typography>
                    <Typography variant="body1">Aug 2023 - May 2024</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Member in Business Professionals of America</Typography>
                    <Typography variant="body1">Aug 2020 - May 2021</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Member in Coppell High School's Varsity Choir</Typography>
                    <Typography variant="body1">Aug 2019 - May 2023</Typography>
                </Box>
            </section>
            <br></br>
            <section id="relevant-coursework">
            <Box sx = {{borderBottom: '2px solid #FAF1E9', pb:1, mb:2, textAlign: 'center',}}>
                <Typography variant="h4" align="center" gutterBottom>
                    Relevant Coursework
                </Typography>
              </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Introduction to Python</Typography>
                    <Typography variant="body1">Fall 2023</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Circuit Analysis</Typography>
                    <Typography variant="body1">Fall 2024</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Digital Electronics</Typography>
                    <Typography variant="body1">Fall 2024</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Embedded Systems Development in C</Typography>
                    <Typography variant="body1">Fall 2024</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Program Design and Concepts</Typography>
                    <Typography variant="body1">Fall 2024</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Power Systems and Circuit Applications</Typography>
                    <Typography variant="body1">Spring 2025</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Local-and-Metropolitan-Area Networks</Typography>
                    <Typography variant="body1">Spring 2025</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Six Sigma and Applied Statistics</Typography>
                    <Typography variant="body1">Spring 2025</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Microcontroller Architecture</Typography>
                    <Typography variant="body1">Spring 2025</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Introduction to Semiconductor and Microelectronics</Typography>
                    <Typography variant="body1">Spring 2025</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Analog Electronics</Typography>
                    <Typography variant="body1">Fall 2025</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Electromagnetics and High Frequency Systems</Typography>
                    <Typography variant="body1">Fall 2025</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Embedded Systems Software</Typography>
                    <Typography variant="body1">Fall 2025</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Product Development</Typography>
                    <Typography variant="body1">Fall 2025</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Electronics Testing</Typography>
                    <Typography variant="body1">Spring 2026</Typography>
                </Box>
                 <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Engineering Leadership</Typography>
                    <Typography variant="body1">Spring 2026</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Electronic Instrumentation</Typography>
                    <Typography variant="body1">Spring 2026</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Advanced Network Systems and Security</Typography>
                    <Typography variant="body1">Spring 2026</Typography>
                </Box>
                 <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Cybersecurity and Digital Ethics</Typography>
                    <Typography variant="body1">Plan to Take</Typography>
                </Box>
                 <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Embedded Real Time Software Development/Typography>
                    <Typography variant="body1">Plan to Take</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Control Systems</Typography>
                    <Typography variant="body1">Plan to Take</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1">Wireless Transmission Systems</Typography>
                    <Typography variant="body1">Plan to Take</Typography>
                </Box>

            </section>
            <br></br>
            <section id="certifications">
            <Box sx = {{borderBottom: '2px solid #FAF1E9', pb:1, mb:2, textAlign: 'center',}}>
                <Typography variant="h4" align="center" gutterBottom>
                    Certifications
                </Typography>
              </Box>
                {[
                    { text: 'CompTIA Security+', date: 'In Progress' },
                    { text: 'Introduction to Generative AI (Google Cloud)', date: 'July 2025' },
                    { text: 'Intro to Machine Learning (Kaggle)', date: 'June 2025' },
                    { text: 'Lean Six Sigma Yellow Belt', date: 'May 2025' },
                    { text: 'Microsoft Word Expert (Microsoft 365 Apps and Office 2019)', date: 'Jan 2021' },
                    { text: 'Microsoft Office Specialist: Associate (Microsoft 365 Apps and Office 2019)', date: 'Jan 2021' },
                    { text: 'Microsoft PowerPoint (Microsoft 365 Apps and Office 2019)', date: 'Jan 2021' },
                    { text: 'MTA: Introduction to Programming Using Python (Certified 2020)', date: 'May 2020' },
                    { text: 'Microsoft Excel (Microsoft 365 Apps and Office 2019)', date: 'May 2020' },
                    { text: 'Microsoft Word (Microsoft 365 Apps and Office 2019)', date: 'Dec 2019' },
                ].map((cert, index) => (
                    <Box key={index} display="flex" justifyContent="space-between">
                        <Typography variant="body1">{cert.text}</Typography>
                        <Typography variant="body1">{cert.date}</Typography>
                    </Box>
                ))}
            </section>
            <br></br>
            <section id="additional-info">
            <Box sx = {{borderBottom: '2px solid #FAF1E9', pb:1, mb:2, textAlign: 'center',}}>
                <Typography variant="h4" align="center" gutterBottom>
                    Additional Info
                </Typography>
              </Box>
                <Box align="center">
                <Typography variant="body1">
                    Other Interests: Writing, Community Service, Photography, Reading, Singing, and Dancing
                </Typography>
                <Typography variant="body1">
                    Skills: Organization, Communication, Perseverance, Commitment;
                </Typography>
                <Typography>
                CAD and Programming: Java, Python, Assembly, MATLAB, JavaScript, HTML, CSS, C++, Embedded C, SQL, and React
                </Typography>
                <Typography variant="body1">Languages: English, Telugu, Spanish (Conversational), and Hindi (Conversational)</Typography>
                </Box>
                <br></br>
                <br></br>
                
            </section>
        </Container>
    );
}

export default Resume;
