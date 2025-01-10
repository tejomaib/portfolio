import React from 'react';
import { Box, Container } from '@mui/material';
import emailIcon from './gmail.jpg';
import linkedinIcon from './linkedIn.jpg';
import instagramIcon from './instagram.jpg';
import githubIcon from './github.jpg';

function Contact() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                minHeight: '75vh',
                textAlign: 'center',
            }}
        >
            {/* Email */}
            <Box
                component="a"
                href="mailto:tejbuyyana@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    display: 'inline-block',
                    overflow: 'hidden',
                    border: '5px solid white',
                    width: 200,
                    height: 200,
                }}
            >
                <Box
                    component="img"
                    src={emailIcon} // Use imported image
                    alt="Email"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Box>

            {/* LinkedIn */}
            <Box
                component="a"
                href="https://www.linkedin.com/in/tejomai-buyyanapragada/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    display: 'inline-block',
                    overflow: 'hidden',
                    border: '5px solid white',
                    width: 200,
                    height: 200,
                }}
            >
                <Box
                    component="img"
                    src={linkedinIcon} // Use imported image
                    alt="LinkedIn"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Box>

            {/* Instagram */}
            <Box
                component="a"
                href="https://www.instagram.com/tejomai_/?igsh=NzFyN3BxbmExODB3&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    display: 'inline-block',
                    overflow: 'hidden',
                    border: '5px solid white',
                    width: 200,
                    height: 200,
                }}
            >
                <Box
                    component="img"
                    src={instagramIcon} // Use imported image
                    alt="Instagram"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Box>

            {/* GitHub */}
            <Box
                component="a"
                href="https://github.com/tejomaib"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    display: 'inline-block',
                    overflow: 'hidden',
                    border: '5px solid white',
                    width: 200,
                    height: 200,
                }}
            >
                <Box
                    component="img"
                    src={githubIcon} // Use imported image
                    alt="GitHub"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Box>
        </Container>
    );
}

export default Contact;

// import React from 'react';
// import {Box, Container} from '@mui/material';

// function Contact() {
//     return (
//       <Container sx = {{
//         display: 'flex';
//         flexDirection: 'row';
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         minHeight: '100vh';
//         textAlign: 'center',
//       }}
//         <div className="page">
//             <h1>Contact Information</h1>
//             <a href="mailto:tejbuyyana@gmail.com">Email</a>
//             <br />
//             <a href="https://www.linkedin.com/in/tejomai-buyyanapragada/">LinkedIn</a>
//             <br />
//             <a href="https://www.instagram.com/tejomai_/?igsh=NzFyN3BxbmExODB3&utm_source=qr">Instagram</a>
//             <br />
//             <a href="https://github.com/tejomaib">GitHub</a>
//         </div>
//     );
// }

// export default Contact;


// // import React from 'react';
// // import BackButton from './BackButton'; // Import BackButton
// // import './Page.css';
// // import ContactImage from './ContactImage';
// // import pictureMail from '../components/gmail.jpg';
// // import pictureLinkedIn from '../components/linkedIn.jpg';
// // import pictureInstagram from '../components/instagram.jpg';
// // import pictureGitHub from '../components/github.jpg';

// // function Contact() {
// //   return (
// //     <div className="page">
// //       <BackButton /> {/* Include BackButton */}
// //       <h1>Contact Information</h1>
// //       <ContactImage
// //       src = {pictureMail}
// //       alt = "mail"
// //       link = "mailto:tejbuyyana@gmail.com"
// //       />
// //        <ContactImage
// //       src = {pictureLinkedIn}
// //       alt = "linkedIn"
// //       link = "https://www.linkedin.com/in/tejomai-buyyanapragada/"
// //       />
// //       <ContactImage
// //       src = {pictureInstagram}
// //       alt = "instagram"
// //       link = "https://www.instagram.com/tejomai_/?igsh=NzFyN3BxbmExODB3&utm_source=qr"
// //       />
// //       <ContactImage
// //       src = {pictureGitHub}
// //       alt = "github"
// //       link = "https://github.com/tejomaib"
// //       />

//     </div>
//   );
// }

// export default Contact;