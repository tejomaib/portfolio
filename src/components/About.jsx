import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

function About() {
  return (
    <Container sx = {{mt:15}}>
        <Grid container justifyContent="center" spacing={5}>
            <Grid item xs={10} md={8}>
                <Typography variant="body1" align="center">
                I strive to expand and broaden my knowledge and experience in both software and hardware engineering fields, including web development, and chip and semiconductor design. Since high school, my love for designing and creating was channeled into both writing programs and making circuits. My ideal internship would be one in which I am continuously challenged to learn and grow from my team and mentors.
                    <br /><br />
                    I’ve gained a solid coding background with languages including Python, C++, C, Javascript, Java, HTML, CSS, and React.js in my tool belt. My most recent and continuously updated project is the website you are currently viewing, created using React! I enjoy pushing myself to persistently step out of my comfort zone to discover and further grow as an individual. This mindset is what drives me to continue updating this website and creating a more complex iteration each time, and my Computer Science minor only further fuels this desire. In the future, I plan to add an AI Chatbot to the bottom of this page and explore the realm of 3D rendering.
                    <br></br>
                    <br></br>
                    Additionally, my hardware background was first initially peaked by my first Arduino kit. With the copious components that came with the kit, I wanted to know the purpose of each one, and so I began experimenting and creating. This was the point at which I decided that I wanted to learn more about circuits and hardware in general. Since then, I have been able to work with various microcontrollers, FPGA boards, and circuit boards to gain the foundations of circuit and logic design. Through skills attained through my schooling, including bitwise operations, I was amazed by the idea of the placement of simple 0s and 1s dictating the entire outcome of a microcontroller. This curiosity allows me to continue creating and learning.
                </Typography>
            </Grid>
        </Grid>
    </Container>
);
}

export default About;