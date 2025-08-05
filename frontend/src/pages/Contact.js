import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, Paper, Container, Stack,
  FormControl, InputLabel, Select, MenuItem, Chip, Grid, Alert,
  Card, CardContent, IconButton
} from '@mui/material';
import {
  Email, Phone, LocationOn, LinkedIn, GitHub, Send,
  Work, AttachMoney, Schedule, Description, Person
} from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    taskDescription: '',
    budget: '',
    timeline: '',
    urgency: 'normal',
    additionalInfo: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you would send this to your backend
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '', email: '', phone: '', company: '', projectType: '',
        taskDescription: '', budget: '', timeline: '', urgency: 'normal', additionalInfo: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 30, color: '#4ecdc4' }} />,
      title: 'Email',
      value: 'nishchitsubedi0@gmail.com',
      link: 'mailto:nishchitsubedi0@gmail.com'
    },
    {
      icon: <Phone sx={{ fontSize: 30, color: '#4ecdc4' }} />,
      title: 'Phone',
      value: '+977 9861733101',
      link: 'tel:+9779861733101'
    },
    {
      icon: <LocationOn sx={{ fontSize: 30, color: '#4ecdc4' }} />,
      title: 'Location',
      value: 'Nepal',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <LinkedIn />,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/',
      color: '#0077b5'
    },
    {
      icon: <GitHub />,
      title: 'GitHub',
      link: 'https://github.com/',
      color: '#333'
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      color: 'white',
      pt: 2
    }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #4ecdc4, #45b7d1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Get In Touch
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#b8b8b8',
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Ready to start a project? Let's discuss your requirements and bring your ideas to life.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} lg={8}>
            <Paper 
              sx={{ 
                p: 4,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 4
              }}
            >
              {submitted && (
                <Alert 
                  severity="success" 
                  sx={{ mb: 3, bgcolor: 'rgba(76, 175, 80, 0.1)', color: '#4caf50' }}
                >
                  Thank you! Your message has been sent. I'll get back to you within 24 hours.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <Typography variant="h5" fontWeight={700} sx={{ color: '#4ecdc4', mb: 2 }}>
                    Project Request Form
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        InputProps={{
                          startAdornment: <Person sx={{ mr: 1, color: '#4ecdc4' }} />
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: 'white',
                            '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                            '&:hover fieldset': { borderColor: '#4ecdc4' },
                            '&.Mui-focused fieldset': { borderColor: '#4ecdc4' }
                          },
                          '& .MuiInputLabel-root': { color: '#b8b8b8' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        InputProps={{
                          startAdornment: <Email sx={{ mr: 1, color: '#4ecdc4' }} />
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: 'white',
                            '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                            '&:hover fieldset': { borderColor: '#4ecdc4' },
                            '&.Mui-focused fieldset': { borderColor: '#4ecdc4' }
                          },
                          '& .MuiInputLabel-root': { color: '#b8b8b8' }
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: <Phone sx={{ mr: 1, color: '#4ecdc4' }} />
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: 'white',
                            '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                            '&:hover fieldset': { borderColor: '#4ecdc4' },
                            '&.Mui-focused fieldset': { borderColor: '#4ecdc4' }
                          },
                          '& .MuiInputLabel-root': { color: '#b8b8b8' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Company/Organization"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: <Work sx={{ mr: 1, color: '#4ecdc4' }} />
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: 'white',
                            '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                            '&:hover fieldset': { borderColor: '#4ecdc4' },
                            '&.Mui-focused fieldset': { borderColor: '#4ecdc4' }
                          },
                          '& .MuiInputLabel-root': { color: '#b8b8b8' }
                        }}
                      />
                    </Grid>
                  </Grid>

                  <FormControl fullWidth>
                    <InputLabel sx={{ color: '#b8b8b8' }}>Project Type</InputLabel>
                    <Select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      sx={{
                        color: 'white',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(255,255,255,0.3)'
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#4ecdc4'
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#4ecdc4'
                        }
                      }}
                    >
                      <MenuItem value="web-development">Web Development</MenuItem>
                      <MenuItem value="cybersecurity">Cybersecurity Assessment</MenuItem>
                      <MenuItem value="mobile-app">Mobile Application</MenuItem>
                      <MenuItem value="consultation">Security Consultation</MenuItem>
                      <MenuItem value="penetration-testing">Penetration Testing</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    fullWidth
                    label="Task Description"
                    name="taskDescription"
                    value={formData.taskDescription}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    required
                    InputProps={{
                      startAdornment: <Description sx={{ mr: 1, color: '#4ecdc4', mt: 1 }} />
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                        '&:hover fieldset': { borderColor: '#4ecdc4' },
                        '&.Mui-focused fieldset': { borderColor: '#4ecdc4' }
                      },
                      '& .MuiInputLabel-root': { color: '#b8b8b8' }
                    }}
                  />

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        label="Budget (₹)"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: <AttachMoney sx={{ mr: 1, color: '#4ecdc4' }} />
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: 'white',
                            '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                            '&:hover fieldset': { borderColor: '#4ecdc4' },
                            '&.Mui-focused fieldset': { borderColor: '#4ecdc4' }
                          },
                          '& .MuiInputLabel-root': { color: '#b8b8b8' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        label="Timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        placeholder="e.g., 2 weeks, 1 month"
                        InputProps={{
                          startAdornment: <Schedule sx={{ mr: 1, color: '#4ecdc4' }} />
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: 'white',
                            '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                            '&:hover fieldset': { borderColor: '#4ecdc4' },
                            '&.Mui-focused fieldset': { borderColor: '#4ecdc4' }
                          },
                          '& .MuiInputLabel-root': { color: '#b8b8b8' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <InputLabel sx={{ color: '#b8b8b8' }}>Urgency</InputLabel>
                        <Select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleChange}
                          sx={{
                            color: 'white',
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'rgba(255,255,255,0.3)'
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#4ecdc4'
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#4ecdc4'
                            }
                          }}
                        >
                          <MenuItem value="low">Low Priority</MenuItem>
                          <MenuItem value="normal">Normal Priority</MenuItem>
                          <MenuItem value="high">High Priority</MenuItem>
                          <MenuItem value="urgent">Urgent</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>

                  <TextField
                    fullWidth
                    label="Additional Information"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    multiline
                    rows={3}
                    placeholder="Any specific requirements, technologies, or additional details..."
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                        '&:hover fieldset': { borderColor: '#4ecdc4' },
                        '&.Mui-focused fieldset': { borderColor: '#4ecdc4' }
                      },
                      '& .MuiInputLabel-root': { color: '#b8b8b8' }
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    startIcon={<Send />}
                    sx={{
                      bgcolor: '#4ecdc4',
                      color: 'white',
                      borderRadius: 2,
                      py: 1.5,
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      '&:hover': {
                        bgcolor: '#45b7d1',
                        transform: 'translateY(-2px)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Send Project Request
                  </Button>
                </Stack>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} lg={4}>
            <Stack spacing={3}>
              {/* Contact Information */}
              <Paper 
                sx={{ 
                  p: 3,
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 4
                }}
              >
                <Typography variant="h6" fontWeight={700} sx={{ color: '#4ecdc4', mb: 3 }}>
                  Contact Information
                </Typography>
                <Stack spacing={2}>
                  {contactInfo.map((info, index) => (
                    <Box 
                      key={index}
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        p: 2,
                        borderRadius: 2,
                        bgcolor: 'rgba(255,255,255,0.05)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'rgba(78, 205, 196, 0.1)',
                          transform: 'translateX(5px)'
                        }
                      }}
                    >
                      {info.icon}
                      <Box sx={{ ml: 2 }}>
                        <Typography variant="body2" color="#b8b8b8">
                          {info.title}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          fontWeight={600}
                          component={info.link ? 'a' : 'span'}
                          href={info.link}
                          sx={{ 
                            color: 'white',
                            textDecoration: 'none',
                            '&:hover': { color: '#4ecdc4' }
                          }}
                        >
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Paper>

              {/* Social Links */}
              <Paper 
                sx={{ 
                  p: 3,
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 4
                }}
              >
                <Typography variant="h6" fontWeight={700} sx={{ color: '#4ecdc4', mb: 3 }}>
                  Connect With Me
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center">
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      href={social.link}
                      target="_blank"
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.1)',
                        color: social.color,
                        '&:hover': {
                          bgcolor: 'rgba(78, 205, 196, 0.2)',
                          transform: 'scale(1.1)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </Paper>

              {/* Response Time */}
              <Card 
                sx={{ 
                  background: 'linear-gradient(45deg, #4ecdc4, #45b7d1)',
                  borderRadius: 4,
                  overflow: 'hidden'
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="h6" fontWeight={700} sx={{ color: 'white', mb: 1 }}>
                    Quick Response
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    I typically respond within 24 hours during business days
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 