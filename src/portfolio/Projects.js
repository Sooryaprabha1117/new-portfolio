// src/Projects.js
import React from 'react';
import { Box } from '@mui/material'; // ✅ Make sure this is imported
import ProjectsTabbedView from './ProjectsTabbedView';
import html5 from './Assets/Projects/html5.png';
import cake from './Assets/Projects/cake4.png';
import Flip from './Assets/Projects/flip.png';
import Thozhil from './Assets/Projects/thozhil.png';
import NEWS from './Assets/Projects/news.png';
import Filter from './Assets/Projects/filter.png';
import Bill from './Assets/Projects/bill.png';
import New from './Assets/Projects/2024.png';
import Country from './Assets/Projects/country.png';
import Notes from './Assets/notes.jpg';
import Todo from './Assets/todolist.png';
import Bg from './Assets/bg.jpg';
import Mandala from './Assets/mandala.png';
import Origami from './Assets/origami.jpg';
import Doodle from './Assets/doodle.jfif';


const projects = [
  {
    title: 'Drawing Tool',
    description: 'Brush strokes magic filled with colors.',
    technologies: ['HTML5', 'CSS', 'Events', 'Canvas'],
    image: html5,
    demoLink: 'https://drawitnow.vercel.app/',
    githubLink: 'https://github.com/username/blockchain-healthcare',
  },
  {
    title: 'Cake Corner',
    description: 'A front-end project built with HTML, CSS, and Bootstrap.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    image: cake,
    demoLink: 'https://cake-corner-olive.vercel.app/',
    githubLink: 'https://github.com/username/cake-corner',
  },
  {
    title: 'New Year 2024',
    description: 'Celebrate New Year with interactive wishes.',
    technologies: ['HTML', 'CSS', 'Events'],
    image: New,
    demoLink: 'https://birthday-prjt.vercel.app/',
    githubLink: 'https://github.com/Sooryaprabha1117/New-year',
  },
  {
    title: 'Thozhil Clone',
    description: 'Clone of job listing site using React.',
    technologies: ['React', 'Carousel', 'CSS'],
    image: Thozhil,
    demoLink: 'https://clone-phi-one.vercel.app/',
    githubLink: 'https://github.com/Sooryaprabha1117/Clone',
  },
  {
    title: 'Filter Image',
    description: 'Image filter app with brightness and contrast controls.',
    technologies: ['React', 'Events', 'CSS'],
    image: Filter,
    demoLink: 'https://filter-image-dun.vercel.app/',
    githubLink: 'https://github.com/Sooryaprabha1117/Filter-Image',
  },
  {
    title: 'NEWS Website',
    description: 'Displays real-time news using API.',
    technologies: ['React', 'CSS', 'API'],
    image: NEWS,
    demoLink: 'https://news-flame-theta.vercel.app/',
    githubLink: 'https://github.com/Sooryaprabha1117/NEWS',
  },
  {
    title: 'Bill Payment',
    description: 'Bill payment interface made for demo.',
    technologies: ['React', 'CSS', 'Events'],
    image: Bill,
    demoLink: 'https://bill-payment-nine.vercel.app/',
    githubLink: 'https://github.com/Sooryaprabha1117/BillPayment',
  },
  {
    title: 'Flip Card',
    description: 'A SaSS-CSS styled interactive flip card.',
    technologies: ['React', 'CSS', 'SaSS'],
    image: Flip,
    demoLink: 'https://drawitnow.vercel.app/',
    githubLink: 'https://github.com/username/blockchain-healthcare',
  },
  {
    title: 'Country Details',
    description: 'Reveal info about countries using API.',
    technologies: ['React', 'API'],
    image: Country,
    demoLink: 'https://country-details-eta.vercel.app/',
    githubLink: 'https://github.com/Sooryaprabha1117/Country-Details',
  },
   {
    title: 'Todo List',
    description: 'A task manager to add, view, and delete daily to-dos.',
    technologies: ['React', 'CSS', 'Events'],
    image: Todo,
    demoLink: 'https://to-do-list-eight-tan.vercel.app/',
    githubLink: 'https://github.com/Sooryaprabha1117/ToDo-List',
   },
   {
    title: 'Notes',
    description: 'A simple app to create, save and manage personal notes.',
    technologies: ['React', 'CSS', 'Events'],
    image: Notes,
    demoLink: 'https://notes-alpha-dusky.vercel.app/',
    githubLink: 'https://github.com/Sooryaprabha1117/Notes',
  },
   {
    title: 'Background Color Changer',
    description: 'A websute to change and preview gradient background colors dynamically.',
    technologies: ['React'],
    image: Bg,
    demoLink: 'https://tailwind-8klb.vercel.app/',
    githubLink: 'https://github.com/Sooryaprabha1117/Tailwind',
  },
   {
    title: 'Doodle Website',
    description: 'A doodle website with shapes and tutorials to create creative patterns easily.',
    technologies: ['React', 'API'],
    image: Doodle,
    demoLink: 'https://doodle-plum.vercel.app/',
    githubLink: 'https://github.com/Sooryaprabha1117/Doodle',
  },
   {
    title: 'Mandala Design maker',
    description: 'A tool to create and customize symmetrical mandala art easily.',
    technologies: ['React', 'canvas'],
    image: Mandala,
    demoLink: 'https://mandala-designer.vercel.app/',
    githubLink: 'https://github.com/Sooryaprabha1117/Mandala_Designer',
  },
   {
    title: 'Origami Blog',
    description: 'A blog sharing origami tutorials, tips, and creative paper folding ideas.',
    technologies: ['React', 'CSS'],
    image: Origami,
    demoLink: 'https://origami-black.vercel.app/',
    githubLink: 'https://github.com/Sooryaprabha1117/Origami',
  },
];

function Projects() {
  return (
    <Box sx={{ maxWidth: '1000px', mx: 'auto', mt: '80px', px: 2 }}>
      <ProjectsTabbedView projects={projects} />
    </Box>
  );
}

export default Projects;
