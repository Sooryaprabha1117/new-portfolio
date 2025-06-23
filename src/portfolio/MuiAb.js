import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import DP from "./Assets/1.png";
import logo1 from '../portfolio/Assets/redux1.png';
import logo2 from '../portfolio/Assets/REACT.png';
import logo3 from '../portfolio/Assets/css.png';
import logo4 from '../portfolio/Assets/JAVASCRIPT.png';
import logo5 from '../portfolio/Assets/html.png';
import logo6 from '../portfolio/Assets/sass.png';
import logo7 from '../portfolio/Assets/bootstrap.jpeg';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const floatAnimation = {
  animation: 'float 3s ease-in-out infinite',
  '@keyframes float': {
    '0%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' },
    '100%': { transform: 'translateY(0px)' },
  },
};

const fadeIn = {
  animation: 'fadeIn 1.5s ease-out both',
  '@keyframes fadeIn': {
    '0%': { opacity: 0, transform: 'translateY(30px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
};

const AboutMeCard = () => {
  return (
    <Box
      sx={{
        marginTop: '10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: { xs: 4, md: 16 }, // Increased side padding
        py: { xs: 4, md: 6 },  // Reduced vertical padding
        fontFamily: `'Georgia', serif`,
        width: '80%',
        color: '#f5f5f5',
        ...fadeIn,
      }}
    >
      <Avatar
        src={DP}
        alt="Profile"
        sx={{
          width: 130,
          height: 130,
          mb: 2,
          border: '4px solid #fff',
          boxShadow: '0 4px 15px rgba(255,255,255,0.2)',
        }}
      />

      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 1,
          textAlign: 'center',
          color: '#ffffff',
        }}
      >
        Hi, I am Soorya Prabha
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: '880px',
          fontSize: '1rem',
          color: '#e0e0e0',
          lineHeight: 1.5,
          textAlign: 'center',
        }}
      >
        I'm from Tirunelveli and completed a degree in Computer Science Engineering at Thamirabharani Engineering College, with a CGPA of nearly 8/10. 
        I am skilled in React, CSS, JavaScript, Bootstrap, HTML5, Sass, NodeJS, MongoDB and Material-UI (MUI). I'm in the process of learning the MERN stack, with a current focus on React.
        <br />
        My main interest lies in front-end development and UI design, and I’ve applied these skills in my projects. I’m eager to gain practical experience and apply what I’m learning. I am available for work opportunities where I can contribute with my skills and dedication, and I’m committed to delivering my best to complete any task.
      </Typography>

     
        <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    gap: 3,
    mt: 4,
    flexWrap: 'wrap',
  }}
>
  {logos.map((logo, index) => (
    <Box
      key={index}
      sx={{
        width: 56,
        height: 58,
        ...floatAnimation,
        animationDelay: `${index * 0.15}s`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src={logo}
        alt={`Logo ${index + 1}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',   // Preserve transparency and shape
          filter: 'none',         // No grayscale
        }}
      />
    </Box>
  ))}
</Box>

      
    </Box>
  );
};

export default AboutMeCard;
