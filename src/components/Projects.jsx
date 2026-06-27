import React from 'react';
import { Container, Typography, Divider } from '@mui/material';

function Projects() {
    const projects = [
        {
            title: "RFID System with Facial Recognition",
            description:
                "Designed a multi-factor authentication system combining RFID and facial recognition using an Arduino Mega 2560, MFRC522 RFID module, and a Raspberry Pi equipped with a camera module. Upon scanning an RFID tag, the system triggered a green LED for authorized users and a red LED for invalid attempts. Valid scans prompted the Raspberry Pi to initiate facial recognition using OpenCV to confirm identity. Based on the outcome, the system sent real-time email notifications to predefined recipients, providing updates on both successful and denied access attempts to enhance overall security."
        },
        {
            title: "Curated Matchmaking Web Platform",
            description:
                "Developed a full-stack matchmaking platform using Python, React.js, TypeScript, HTML, Node.js, and Tailwind CSS to connect verified college students through curated matches and personalized dashboards. The backend was designed to securely manage user data, authentication, and match algorithms while supporting role-based access to distinguish admin and user interfaces. The platform features modular user profiles and intuitive navigation, and it is currently being prepared for deployment on a college campus to foster meaningful peer interactions in a secure, closed-network environment."
        },
        {
            title: "App-Controlled Smart Car",
            description:
                "Built a mobile app-controlled smart car using an Arduino Mega 2560 and an ESP32 Wi-Fi/Bluetooth module for wireless communication. The car supports real-time manual navigation via a mobile application, with integrated distance sensors to enable basic obstacle detection and collision avoidance. The system was designed with IoT principles, allowing remote access and status updates. Current enhancements include autonomous driving features such as lane/path detection, enabling the smart car to navigate independently under preset conditions."
        },
        {
            title: "Fingerprint Lock System",
            description:
                "Constructed a garage lock system prototype using a fingerprint sensor, with an LED and buzzer indicating whether a fingerprint entry was validated. Fingerprints were enrolled into the sensor's database using an Arduino Uno microcontroller, and the match results were sent to an STM32 microcontroller to trigger the appropriate LED and buzzer. If the fingerprint matched one in the database, a servo motor would open and close the garage door."
        },
        {
            title: "Routing Table Simulation",
            description:
                "Developed a routing table simulation in C++ that allows users to input subnet numbers, subnet masks, and next-hop values to build a dynamic routing table. The program validates IP address formats, converts IP addresses and subnet masks into binary, and performs bitwise AND operations to determine subnet matches. If an entered IP address matches a subnet, the corresponding next hop is displayed; otherwise, the program forwards the IP to a default gateway if set, or flags the packet as lost. The simulation provides structured output in the user interface and supports multi-word next-hop entries for a more realistic experience."
        },
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
        <Container>
            {/* <Typography variant="h3" gutterBottom>Projects</Typography> */}
            {projects.map((project, index) => (
                <div key={index}>
                    <Typography align="center" variant="h4" gutterBottom>{project.title}</Typography>
                    <Typography align="center" variant="body1" gutterBottom>{project.description}</Typography>
                    {index < projects.length - 1 && <Divider sx={{ my: 2 }} />}
                </div>
            ))}
            <br></br>
            <br></br>
        </Container>
    );
}

export default Projects;