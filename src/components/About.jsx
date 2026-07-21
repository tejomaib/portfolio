import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

function About() {
  return (
    <Container sx = {{mt:15}}>
        <Grid container justifyContent="center" spacing={5}>
            <Grid item xs={10} md={8}>
                <Typography variant="body1" align="center">
                    I am passionate about the intersection of hardware, software, and cybersecurity, and I am eager to explore how these fields come together in embedded systems. I am particularly interested in hardware design, embedded software, and electronic testing because they combine low-level programming with physical hardware while emphasizing system reliability and security. I enjoy understanding how hardware and software interact to build efficient, secure, and dependable technologies.
                    <br /><br />
                    My coursework has given me a strong foundation in embedded systems, microcontroller architecture, digital and analog electronics, mixed-signal testing, networking, cybersecurity, and circuit analysis. These experiences have strengthened my understanding of hardware-software integration while reinforcing the importance of secure system design and rigorous testing.
                    <br /><br />
                    Through my internship at Analog Devices, I gained hands-on experience programming and debugging embedded systems, developing AI-assisted workflows, and improving hardware bring-up and testing processes. My undergraduate research and personal projects have further expanded my experience with computer vision, digital IC testing, FPGA design, IoT systems, and embedded programming. Together, these experiences have reinforced my interest in embedded systems, hardware validation, and cybersecurity, and I look forward to continuing to grow in these areas.
                </Typography>
            </Grid>
        </Grid>
    </Container>
);
}

export default About;