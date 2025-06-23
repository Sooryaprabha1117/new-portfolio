import React, { useState } from 'react';
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Chip,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';

function ProjectsTabbedView({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const handleChange = (event, newValue) => {
    setActiveIndex(newValue);
  };

  return (
   <Box
  sx={{
    px: { xs: 2, sm: 4 },
    pt: { xs: 2, sm: 4 },
    pb: { xs: 8, sm: 8 },
    minHeight: '100vh',
    maxHeight: { xs: '100vh', sm: 'none' }, // ✅ add maxHeight only for mobile
    width: '100%',
    maxWidth: '100vw',
    boxSizing: 'border-box',
    color: '#fff',
    textAlign: 'center',
    overflowX: 'hidden',
    overflowY: { xs: 'auto', sm: 'hidden' }, // ✅ enable scroll only on mobile
  }}
>

      <Tabs
        value={activeIndex}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        textColor="inherit"
        TabIndicatorProps={{
          style: { backgroundColor: '#ff69b4' },
        }}
        sx={{
          mb: 3,
          '.MuiTab-root': {
            color: '#ffb6c1',
            fontWeight: 600,
            textTransform: 'none',
            minWidth: '50%',
            fontSize: { xs: '0.85rem', sm: '1rem' },
            padding: '6px 8px',
          },
          '.Mui-selected': {
            color: '#ffffff',
          },
          '.MuiTabs-scrollButtons': {
            color: '#ffffff',
            display: { xs: 'flex', sm: 'flex' },
          },
        }}
      >
        {projects.map((project, index) => (
          <Tab key={index} label={project.title} />
        ))}
      </Tabs>

      <motion.div
        key={activeProject.title}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
      >
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            width: '100%',
            boxSizing: 'border-box',
            px: 1,
          }}
        >
          <Box
            component="img"
            src={activeProject.image}
            alt={activeProject.title}
            sx={{
              width: '100%',
              maxWidth: 400,
              aspectRatio: '16 / 10',
              objectFit: 'cover',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(255, 182, 193, 0.4)',
            }}
          />

          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: '#ffb6c1',
              fontSize: { xs: '1.1rem', sm: '1.5rem' },
              textAlign: 'center',
            }}
          >
            {activeProject.title}
          </Typography>

          <Typography
            sx={{
              color: '#e0d6e0',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              px: 2,
              textAlign: 'center',
              wordWrap: 'break-word',
            }}
          >
            {activeProject.description}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1,
              px: 1,
            }}
          >
            {activeProject.technologies.map((tech, idx) => (
              <Chip
                key={idx}
                label={tech}
                sx={{
                  backgroundColor: '#ff69b4',
                  color: '#fff',
                  fontWeight: 500,
                  fontSize: '0.75rem',
                }}
              />
            ))}
          </Box>

          <Box
            sx={{
              mt: 3,
              display: 'flex',
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: 400,
            }}
          >
            <Button
              variant="contained"
              href={activeProject.demoLink}
              target="_blank"
              fullWidth
              sx={{
                backgroundColor: '#ff69b4',
                '&:hover': {
                  backgroundColor: '#ff85c1',
                },
                fontSize: '0.9rem',
                py: 1,
              }}
            >
              Demo
            </Button>

            <Button
              variant="outlined"
              href={activeProject.githubLink}
              target="_blank"
              fullWidth
              sx={{
                color: '#ff69b4',
                borderColor: '#ff69b4',
                '&:hover': {
                  backgroundColor: '#3c012f',
                  borderColor: '#ff85c1',
                  color: '#ff85c1',
                },
                fontSize: '0.9rem',
                py: 1,
              }}
            >
              GitHub
            </Button>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}

export default ProjectsTabbedView;
