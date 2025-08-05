import React, { useState } from 'react';
import {
  Box, Typography, Card, CardContent, CardMedia, Grid, Button, Container,
  Stack, Chip, IconButton, Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import {
  Code, GitHub, Launch, Star, Search,
  Security, Storage, Terminal, Web, PhoneAndroid
} from '@mui/icons-material';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterTech, setFilterTech] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'SecureVault - Password Manager',
      description: 'A secure password manager with end-to-end encryption and biometric authentication. Features include secure password generation, auto-fill, and breach monitoring.',
      longDescription: 'SecureVault is a comprehensive password management solution built with React and Node.js. It implements AES-256 encryption for data security and includes features like password strength analysis, secure sharing, and breach monitoring. The application uses biometric authentication on supported devices and provides a clean, intuitive interface for managing credentials across multiple platforms.',
      image: 'https://via.placeholder.com/400x250/1a1a2e/ffffff?text=SecureVault',
      category: 'Cybersecurity',
      technologies: ['React', 'Node.js', 'Crypto.js', 'MongoDB'],
      github: 'https://github.com/',
      demo: 'https://securevault-demo.com',
      featured: true,
      status: 'Completed',
      year: 2024
    },
    {
      id: 2,
      title: 'Gaming Marketplace',
      description: 'Platform for buying and selling gaming items, battle passes, and premium content with secure payment integration.',
      longDescription: 'A full-stack e-commerce platform specifically designed for gaming communities. Features include real-time inventory management, secure payment processing with Khalti and eSewa integration, user authentication, and a responsive design optimized for both desktop and mobile users. The platform includes features like wishlists, order tracking, and seller ratings.',
      image: 'https://via.placeholder.com/400x250/16213e/ffffff?text=Gaming+Marketplace',
      category: 'Web Development',
      technologies: ['React', 'TypeScript', 'Node.js', 'MySQL'],
      github: 'https://github.com/',
      demo: 'https://gaming-marketplace.com',
      featured: true,
      status: 'Live',
      year: 2024
    },
    {
      id: 3,
      title: 'Network Scanner Tool',
      description: 'Comprehensive network scanning and vulnerability assessment tool with detailed reporting capabilities.',
      longDescription: 'A powerful network security tool built in Python that performs comprehensive network reconnaissance and vulnerability assessment. Features include port scanning, service enumeration, vulnerability detection, and detailed PDF reporting. The tool integrates with popular security databases and provides both command-line and web-based interfaces.',
      image: 'https://via.placeholder.com/400x250/0f3460/ffffff?text=Network+Scanner',
      category: 'Cybersecurity',
      technologies: ['Python', 'Nmap', 'Scapy', 'SQLite'],
      github: 'https://github.com/',
      demo: null,
      featured: true,
      status: 'Completed',
      year: 2023
    },
    {
      id: 4,
      title: 'Cybersecurity Dashboard',
      description: 'Real-time security monitoring and threat detection system with automated alerting.',
      longDescription: 'A comprehensive security operations center (SOC) dashboard that provides real-time monitoring of network security events, threat intelligence feeds, and automated incident response. The dashboard includes customizable widgets, threat hunting capabilities, and integration with popular SIEM tools. Features real-time alerts, threat correlation, and detailed analytics.',
      image: 'https://via.placeholder.com/400x250/533483/ffffff?text=Security+Dashboard',
      category: 'Cybersecurity',
      technologies: ['React', 'Python', 'Docker', 'Elasticsearch'],
      github: 'https://github.com/',
      demo: 'https://security-dashboard.com',
      featured: false,
      status: 'In Development',
      year: 2024
    },
    {
      id: 5,
      title: 'Penetration Testing Framework',
      description: 'Automated penetration testing and vulnerability assessment platform with modular architecture.',
      longDescription: 'A modular penetration testing framework that automates common security testing procedures. The framework includes modules for web application testing, network reconnaissance, social engineering, and exploit development. It provides a unified interface for various security tools and generates comprehensive reports with remediation recommendations.',
      image: 'https://via.placeholder.com/400x250/7209b7/ffffff?text=PenTest+Framework',
      category: 'Cybersecurity',
      technologies: ['Python', 'Bash', 'Metasploit', 'PostgreSQL'],
      github: 'https://github.com/',
      demo: null,
      featured: false,
      status: 'Completed',
      year: 2023
    },
    {
      id: 6,
      title: 'Digital Forensics Tool',
      description: 'Advanced digital forensics and evidence collection system with timeline analysis.',
      longDescription: 'A comprehensive digital forensics tool designed for law enforcement and security professionals. Features include disk imaging, file carving, memory analysis, and timeline reconstruction. The tool supports multiple file systems, provides chain of custody documentation, and generates court-ready reports. Includes integration with popular forensics databases.',
      image: 'https://via.placeholder.com/400x250/3a0ca3/ffffff?text=Forensics+Tool',
      category: 'Cybersecurity',
      technologies: ['Python', 'SQLite', 'Forensics', 'C++'],
      github: 'https://github.com/',
      demo: null,
      featured: false,
      status: 'Completed',
      year: 2023
    },
    {
      id: 7,
      title: 'Mobile Security Scanner',
      description: 'Android and iOS security assessment tool with vulnerability detection and reporting.',
      longDescription: 'A mobile application security scanner that analyzes Android and iOS apps for common vulnerabilities. Features include static code analysis, dynamic testing, API security assessment, and compliance checking. The tool generates detailed reports with vulnerability descriptions, risk assessments, and remediation guidance.',
      image: 'https://via.placeholder.com/400x250/4f46e5/ffffff?text=Mobile+Security',
      category: 'Cybersecurity',
      technologies: ['Python', 'Java', 'Swift', 'Docker'],
      github: 'https://github.com/',
      demo: null,
      featured: false,
      status: 'In Development',
      year: 2024
    },
    {
      id: 8,
      title: 'Threat Intelligence Platform',
      description: 'Real-time threat intelligence gathering and analysis platform with automated correlation.',
      longDescription: 'A threat intelligence platform that aggregates data from multiple sources including open-source intelligence, dark web monitoring, and security feeds. Features include automated threat correlation, IOC management, threat hunting capabilities, and integration with security tools. Provides real-time alerts and detailed threat analysis reports.',
      image: 'https://via.placeholder.com/400x250/7c3aed/ffffff?text=Threat+Intel',
      category: 'Cybersecurity',
      technologies: ['Python', 'Elasticsearch', 'Kafka', 'React'],
      github: 'https://github.com/',
      demo: null,
      featured: false,
      status: 'Planning',
      year: 2024
    }
  ];

  const categories = ['All', 'Cybersecurity', 'Web Development', 'Mobile Development'];
  const technologies = ['All', 'React', 'Python', 'Node.js', 'TypeScript', 'Java', 'C++'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || project.category === filterCategory;
    const matchesTech = filterTech === 'All' || project.technologies.includes(filterTech);
    
    return matchesSearch && matchesCategory && matchesTech;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Cybersecurity': return <Security />;
      case 'Web Development': return <Web />;
      case 'Mobile Development': return <PhoneAndroid />;
      default: return <Code />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return '#4caf50';
      case 'Completed': return '#2196f3';
      case 'In Development': return '#ff9800';
      case 'Planning': return '#9c27b0';
      default: return '#757575';
    }
  };

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
            My Projects
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#b8b8b8',
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            A collection of my work in cybersecurity, web development, and innovative solutions
          </Typography>
        </Box>

        {/* Filters */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: '#4ecdc4' }} />
                    </InputAdornment>
                  ),
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
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: '#b8b8b8' }}>Category</InputLabel>
                <Select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
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
                  {categories.map(category => (
                    <MenuItem key={category} value={category}>{category}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: '#b8b8b8' }}>Technology</InputLabel>
                <Select
                  value={filterTech}
                  onChange={(e) => setFilterTech(e.target.value)}
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
                  {technologies.map(tech => (
                    <MenuItem key={tech} value={tech}>{tech}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={3}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    borderColor: '#4ecdc4'
                  }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <Box sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    display: 'flex',
                    gap: 1
                  }}>
                    {project.featured && (
                      <Chip 
                        icon={<Star sx={{ fontSize: 16 }} />}
                        label="Featured" 
                        size="small" 
                        sx={{ 
                          bgcolor: 'rgba(255, 193, 7, 0.2)',
                          color: '#ffc107',
                          fontWeight: 600
                        }} 
                      />
                    )}
                    <Chip 
                      label={project.status} 
                      size="small" 
                      sx={{ 
                        bgcolor: 'rgba(0,0,0,0.7)',
                        color: getStatusColor(project.status),
                        fontWeight: 600
                      }} 
                    />
                  </Box>
                </Box>
                
                <CardContent sx={{ p: 3 }}>
                  <Typography 
                    variant="h6" 
                    fontWeight={700} 
                    mb={1}
                    sx={{ color: 'white' }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography 
                    color="#b8b8b8" 
                    mb={2}
                    sx={{ fontSize: '0.9rem', lineHeight: 1.4 }}
                  >
                    {project.description}
                  </Typography>
                  
                  <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
                    <Chip 
                      icon={getCategoryIcon(project.category)}
                      label={project.category} 
                      size="small" 
                      sx={{ 
                        bgcolor: 'rgba(78, 205, 196, 0.1)',
                        color: '#4ecdc4',
                        fontWeight: 600
                      }} 
                    />
                    {project.technologies.slice(0, 2).map(tech => (
                      <Chip 
                        key={tech}
                        label={tech} 
                        size="small" 
                        sx={{ 
                          bgcolor: 'rgba(255, 193, 7, 0.1)',
                          color: '#ffc107',
                          fontWeight: 600
                        }} 
                      />
                    ))}
                    {project.technologies.length > 2 && (
                      <Chip 
                        label={`+${project.technologies.length - 2}`} 
                        size="small" 
                        sx={{ 
                          bgcolor: 'rgba(255,255,255,0.1)',
                          color: 'white',
                          fontWeight: 600
                        }} 
                      />
                    )}
                  </Stack>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="#b8b8b8">
                      {project.year}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      {project.github && (
                        <IconButton
                          href={project.github}
                          target="_blank"
                          size="small"
                          sx={{
                            color: '#4ecdc4',
                            bgcolor: 'rgba(78, 205, 196, 0.1)',
                            '&:hover': {
                              bgcolor: 'rgba(78, 205, 196, 0.2)',
                              transform: 'scale(1.1)'
                            }
                          }}
                        >
                          <GitHub />
                        </IconButton>
                      )}
                      {project.demo && (
                        <IconButton
                          href={project.demo}
                          target="_blank"
                          size="small"
                          sx={{
                            color: '#4ecdc4',
                            bgcolor: 'rgba(78, 205, 196, 0.1)',
                            '&:hover': {
                              bgcolor: 'rgba(78, 205, 196, 0.2)',
                              transform: 'scale(1.1)'
                            }
                          }}
                        >
                          <Launch />
                        </IconButton>
                      )}
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => setSelectedProject(project)}
                        sx={{
                          borderColor: '#4ecdc4',
                          color: '#4ecdc4',
                          '&:hover': {
                            borderColor: '#45b7d1',
                            bgcolor: 'rgba(78, 205, 196, 0.1)'
                          }
                        }}
                      >
                        Details
                      </Button>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" color="#b8b8b8" mb={2}>
              No projects found
            </Typography>
            <Typography color="#888" mb={3}>
              Try adjusting your search criteria or filters
            </Typography>
            <Button
              variant="outlined"
              onClick={() => {
                setSearchTerm('');
                setFilterCategory('All');
                setFilterTech('All');
              }}
              sx={{
                borderColor: '#4ecdc4',
                color: '#4ecdc4',
                '&:hover': {
                  borderColor: '#45b7d1',
                  bgcolor: 'rgba(78, 205, 196, 0.1)'
                }
              }}
            >
              Clear Filters
            </Button>
          </Box>
        )}

        {/* Project Details Dialog */}
        <Dialog
          open={Boolean(selectedProject)}
          onClose={() => setSelectedProject(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              bgcolor: 'rgba(15, 15, 35, 0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)'
            }
          }}
        >
          {selectedProject && (
            <>
              <DialogTitle sx={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {getCategoryIcon(selectedProject.category)}
                  <Typography variant="h5" fontWeight={700}>
                    {selectedProject.title}
                  </Typography>
                </Box>
              </DialogTitle>
              <DialogContent sx={{ pt: 3 }}>
                <Stack spacing={3}>
                  <Box
                    component="img"
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    sx={{ width: '100%', height: 250, objectFit: 'cover', borderRadius: 2 }}
                  />
                  
                  <Typography color="#b8b8b8" sx={{ lineHeight: 1.8 }}>
                    {selectedProject.longDescription}
                  </Typography>
                  
                  <Box>
                    <Typography variant="h6" fontWeight={700} sx={{ color: '#4ecdc4', mb: 2 }}>
                      Technologies Used
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {selectedProject.technologies.map(tech => (
                        <Chip 
                          key={tech}
                          label={tech} 
                          sx={{ 
                            bgcolor: 'rgba(78, 205, 196, 0.1)',
                            color: '#4ecdc4',
                            fontWeight: 600
                          }} 
                        />
                      ))}
                    </Stack>
                  </Box>
                  
                  <Box>
                    <Typography variant="h6" fontWeight={700} sx={{ color: '#4ecdc4', mb: 2 }}>
                      Project Details
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="#b8b8b8">Category:</Typography>
                        <Typography variant="body1" fontWeight={600}>{selectedProject.category}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="#b8b8b8">Status:</Typography>
                        <Typography variant="body1" fontWeight={600} sx={{ color: getStatusColor(selectedProject.status) }}>
                          {selectedProject.status}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="#b8b8b8">Year:</Typography>
                        <Typography variant="body1" fontWeight={600}>{selectedProject.year}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="#b8b8b8">Featured:</Typography>
                        <Typography variant="body1" fontWeight={600}>
                          {selectedProject.featured ? 'Yes' : 'No'}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Stack>
              </DialogContent>
              <DialogActions sx={{ p: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <Stack direction="row" spacing={2}>
                  {selectedProject.github && (
                    <Button
                      variant="outlined"
                      startIcon={<GitHub />}
                      href={selectedProject.github}
                      target="_blank"
                      sx={{
                        borderColor: '#4ecdc4',
                        color: '#4ecdc4',
                        '&:hover': {
                          borderColor: '#45b7d1',
                          bgcolor: 'rgba(78, 205, 196, 0.1)'
                        }
                      }}
                    >
                      View Code
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button
                      variant="contained"
                      startIcon={<Launch />}
                      href={selectedProject.demo}
                      target="_blank"
                      sx={{
                        bgcolor: '#4ecdc4',
                        '&:hover': { bgcolor: '#45b7d1' }
                      }}
                    >
                      Live Demo
                    </Button>
                  )}
                  <Button
                    onClick={() => setSelectedProject(null)}
                    sx={{ color: '#b8b8b8' }}
                  >
                    Close
                  </Button>
                </Stack>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Projects; 