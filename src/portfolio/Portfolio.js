import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';
import "./Portfolio.css";

const Root = styled(Box)(({ theme }) => ({
  height: '95vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
   // Darker gradient for more contrast
  flexDirection: 'column',
  textAlign: 'center',
  padding: theme.spacing(2),
  backgroundSize: 'cover', // Ensures the gradient covers the entire screen
  backgroundAttachment: 'fixed', // Keeps the background fixed during scroll
}));

const Name = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#290025', // Changed text color to white for better contrast
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  display: 'inline-block',
  animation: 'typing 4s steps(20) 1s infinite, blink 0.7s step-end infinite, pause 15s step-end infinite',
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', // Text shadow for better visibility
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem', // Reduce font size for small screens
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem', // Further reduce font size for extra small screens
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  color: '#b7382e', // Changed title color to white
  marginBottom: theme.spacing(2),
  fontWeight: '600',
  textTransform: 'uppercase',
  textShadow: '1px 1px 4px rgba(58, 3, 49, 0)', // Added shadow for readability
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem', // Reduce title size for small screens
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem', // Further reduce title size on extra small screens
  },
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  backgroundColor: '#290025',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#9c1b59',
  },
  padding: '12px 24px',
  borderRadius: '50px',
  transition: 'background-color 0.3s ease',
  '&:active': {
    backgroundColor: '#7a1534',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '10px 20px', // Adjust button padding for smaller screens
    fontSize: '1rem', // Adjust font size for the button
  },
  [theme.breakpoints.down('xs')]: {
    padding: '8px 16px', // Further reduce padding
    fontSize: '0.9rem', // Further reduce font size for button
  },
}));

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  boxShadow: theme.shadows && theme.shadows[10] ? theme.shadows[10] : '0px 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#e0bbe1',
  animation: 'bounceIn 2s ease-out',
  borderRadius: '12px',
  textAlign: 'center',
  transition: 'box-shadow 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2), // Reduce padding for small screens
    width: '95%', // Reduce width on smaller screens
  },
  [theme.breakpoints.up('sm')]: {
    width: '70%', // Default width for medium screens
  },
  [theme.breakpoints.up('md')]: {
    width: '100%',
   // Increase width for large screens
  },
  
}));


const Portfolio = () => {
  return (
    <Root>
      <PaperStyled>
        <Name>SOORYA PRABHA M</Name>
        <Title>REACT DEVELOPER, FRONT END DEVELOPER</Title>
        <ButtonStyled variant="contained" size="large" href="/contact">
          Get in Touch
        </ButtonStyled>
      </PaperStyled>
    </Root>
  );
};

export default Portfolio;
