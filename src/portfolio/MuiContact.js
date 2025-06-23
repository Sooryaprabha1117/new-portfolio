import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MuiContact.css'; // Your existing CSS
import linked from "./Assets/linkedin.gif";
import git from "./Assets/git.gif";
import mail from "./Assets/mail.gif";
import crop from "./Assets/Contact us-amico.png";

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("_captcha", "false");

    try {
      await fetch("https://formsubmit.co/ajax/prabhasoorya17@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      toast.success(" Message sent!", {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(" Failed to send. Try again.");
    }
  };

  return (
    <Grid container className="contact-container">
      <ToastContainer />

      {/* Right side contact form */}
      <Grid item xs={12} md={6}>
        <Box className="contact-form">
          <h2>CONTACT ME</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              margin="normal"
              required
              sx={{
                '& .MuiInputBase-root': {
                  height: '43px',
                },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              margin="normal"
              type="email"
              required
              sx={{
                '& .MuiInputBase-root': {
                  height: '43px',
                },
              }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={2}
              required
              sx={{
                '& .MuiInputBase-root': {
                  height: '70px',
                },
                '& .MuiTextareaAutosize-root': {
                  minHeight: '80px',
                },
              }}
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                marginTop: '21px',
                backgroundColor: '#470439',
                '&:hover': {
                  backgroundColor: '#8b1e87',
                  color: "#fff",
                }
              }}
            >
              Send Message
            </Button>
          </form>
        </Box>
      </Grid>

      {/* Left side image */}
      <Grid item xs={12} md={6} className="contact-image">
        <img
          src={crop}
          alt="Contact visual"
          style={{
            width: '60%',
            height: 'auto',
            objectFit: 'cover',
            marginLeft: '15%',
          }}
        />
      </Grid>

      {/* Social Media Section */}
      <Grid item xs={12}>
        <div className="social-media">
          <ul>
            <li>
              <img src={linked} alt="LinkedIn" />
              <a href="https://www.linkedin.com/in/soorya1727/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <img src={git} alt="GitHub" />
              <a href="https://github.com/Sooryaprabha1117" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <img src={mail} alt="Email" />
              <a href="mailto:prabhasoorya17@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </li>
          </ul>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;
