import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import profile from './IMG_6977.jpg';

function Home() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '75vh',
                textAlign: 'center',
            }}
        >
            <Box
                component="img"
                src={profile}
                alt="Teju Buyyanapragada"
                sx={{
                    width: 300,
                    height: 300,
                    borderRadius: '50%', 
                    objectFit: 'cover', 
                    marginBottom: 2, 
                    border: '9px solid white', 
                }}
            />
            <Typography variant="h3" gutterBottom>
                Teju Buyyanapragada
            </Typography>
            <Typography variant="body1">
                Sophomore at Texas A&M University
            </Typography>
        </Container>
    );
}

export default Home;
