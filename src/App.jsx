import React from 'react';
//import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, CssBaseline, Box } from '@mui/material';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import whiteWaterColor from './components/space.jpg';
import { createTheme, ThemeProvider } from '@mui/material';
import logo from './components/logoweb.jpg';

const theme = createTheme({typography: {fontFamily: 'Georgia, serif',}});

function NavBar() {
    return (
        <AppBar position="static" sx = {{backgroundColor: '#19171A'}}>
            <Toolbar sx = {{justifyContent: 'space-between'}}>
              <Box>
              <Button sx = {{padding: 0}} component={Link} to="/">
              <Box component="img" src = {logo} alt = "Home" sx={{height: 40, width: 40}}/>
              </Button>
              </Box>
              <Box sx = {{display: 'flex', gap: 3}}>
              <Button sx = {{color:'#FAF1E9'}} component={Link} to="/about">About</Button>
                <Button sx = {{color:'#FAF1E9'}} component={Link} to="/projects">Projects</Button>
                <Button sx = {{color:'#FAF1E9'}} component={Link} to="/resume">Resume</Button>
                <Button sx = {{color:'#FAF1E9'}} component={Link} to="/contact">Contact</Button>
              </Box>
            </Toolbar>
        </AppBar>
    );
}

function App() {
    return (//#FAF1E9, B87D41
      <ThemeProvider theme={theme}>
        <Router>
            <CssBaseline />
            <Box sx = {{backgroundImage: `url(${whiteWaterColor})`, color: '#FAF1E9', backgroundSize: 'cover', minHeight: '100vh', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <NavBar />
            <Box sx={{ marginTop: 4 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Box>
            </Box>
        </Router>
        </ThemeProvider>
    );
}

export default App;