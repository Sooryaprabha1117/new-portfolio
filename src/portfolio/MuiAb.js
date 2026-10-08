import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import DP from "./Assets/1.png";

const logos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
];

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
        px: { xs: 4, md: 16 },
        py: { xs: 4, md: 6 },
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
        sx={{ fontWeight: 600, mb: 1, textAlign: 'center', color: '#ffffff' }}
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
        I am a Junior Developer skilled in React, JavaScript, HTML5, CSS3, Bootstrap, SASS, Node.js, Express, MongoDB, and Material-UI (MUI). I also have hands-on experience with n8n automation, Canvas API, and GitHub Actions.

My main interest lies in Full Stack Development (MERN), and I've applied these skills in my projects like Thozhil Clone Website, Mandala Design App, and Notes-Taking App.

Currently working as a Junior Developer at Technology Analytica Private Limited, where I build full-stack web applications and implement automation workflows.

  <br />
I'm eager to gain more practical experience and apply what I'm learning. I am available for work opportunities where I can contribute with my skills and dedication, and I'm committed to delivering my best to complete any task.
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
                objectFit: 'contain',
                filter: 'none',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AboutMeCard;
