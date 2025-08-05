import React from 'react';
import { Box, Typography, Avatar, Button, Card, CardContent, Grid, Chip, Stack, IconButton, Paper, Divider, Container } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import StarIcon from '@mui/icons-material/Star';
import DownloadIcon from '@mui/icons-material/Download';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const featuredProjects = [
  {
    title: 'SecureVault - Password Manager',
    desc: 'A secure password manager with end-to-end encryption and biometric authentication.',
    tags: ['React', 'Node.js', 'Crypto.js'],
    code: '#',
    demo: '#',
    image: 'https://via.placeholder.com/400x250/1a1a2e/ffffff?text=SecureVault',
    featured: true
  },
  {
    title: 'Gaming Marketplace',
    desc: 'Platform for buying and selling gaming items, battle passes, and premium content.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    code: '#',
    demo: '#',
    image: 'https://via.placeholder.com/400x250/16213e/ffffff?text=Gaming+Marketplace',
    featured: true
  },
  {
    title: 'Network Scanner Tool',
    desc: 'Comprehensive network scanning and vulnerability assessment tool.',
    tags: ['Python', 'Nmap', 'Scapy'],
    code: '#',
    demo: '',
    image: 'https://via.placeholder.com/400x250/0f3460/ffffff?text=Network+Scanner',
    featured: true
  },
  {
    title: 'Cybersecurity Dashboard',
    desc: 'Real-time security monitoring and threat detection system.',
    tags: ['React', 'Python', 'Docker'],
    code: '#',
    demo: '#',
    image: 'https://via.placeholder.com/400x250/533483/ffffff?text=Security+Dashboard',
    featured: false
  },
  {
    title: 'Penetration Testing Framework',
    desc: 'Automated penetration testing and vulnerability assessment platform.',
    tags: ['Python', 'Bash', 'Metasploit'],
    code: '#',
    demo: '',
    image: 'https://via.placeholder.com/400x250/7209b7/ffffff?text=PenTest+Framework',
    featured: false
  },
  {
    title: 'Digital Forensics Tool',
    desc: 'Advanced digital forensics and evidence collection system.',
    tags: ['Python', 'SQLite', 'Forensics'],
    code: '#',
    demo: '',
    image: 'https://via.placeholder.com/400x250/3a0ca3/ffffff?text=Forensics+Tool',
    featured: false
  }
];

const skills = [
  {
    icon: <SecurityIcon sx={{ fontSize: 40, color: '#ff6b6b' }} />, 
    title: 'Cybersecurity', 
    items: ['Network Security', 'Penetration Testing', 'Vulnerability Assessment', 'Digital Forensics', 'Incident Response', 'Security Analysis'],
    color: '#ff6b6b'
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40, color: '#4ecdc4' }} />, 
    title: 'Programming', 
    items: ['JavaScript/TypeScript', 'Python', 'Java', 'C/C++', 'React.js', 'Node.js'],
    color: '#4ecdc4'
  },
  {
    icon: <TerminalIcon sx={{ fontSize: 40, color: '#45b7d1' }} />, 
    title: 'Security Tools', 
    items: ['Wireshark', 'Nmap', 'Metasploit', 'Burp Suite', 'Kali Linux', 'OWASP ZAP'],
    color: '#45b7d1'
  },
  {
    icon: <StorageIcon sx={{ fontSize: 40, color: '#96ceb4' }} />, 
    title: 'Technologies', 
    items: ['Docker', 'AWS', 'Linux Administration', 'Database Security', 'Firewall Configuration', 'VPN Setup'],
    color: '#96ceb4'
  }
];

const education = [
  "Bachelor's in Cyber Security",
  'CompTIA Security+',
  'Certified Ethical Hacker (CEH)',
  'CISSP Associate',
];

const Portfolio = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      color: 'white'
    }}>
      {/* Hero Section */}
      <Box sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Animated Background */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
          animation: 'pulse 4s ease-in-out infinite alternate'
        }} />
        
        <Container maxWidth="lg">
          <Box sx={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 2
          }}>
            <Avatar
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nishchit&backgroundColor=1a1a2e"
              sx={{ 
                width: 180, 
                height: 180, 
                mx: 'auto', 
                mb: 4, 
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                border: '4px solid #4ecdc4',
                background: 'linear-gradient(45deg, #4ecdc4, #45b7d1)'
              }}
            />
            
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '3rem', md: '4.5rem' },
                fontWeight: 800,
                background: 'linear-gradient(45deg, #4ecdc4, #45b7d1, #96ceb4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                textShadow: '0 4px 8px rgba(0,0,0,0.3)'
              }}
            >
              Nishchit Subedi
            </Typography>
            
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 300,
                color: '#a8a8a8',
                mb: 3,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Cybersecurity Student & Full Stack Developer
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#b8b8b8',
                mb: 4,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Passionate about cybersecurity, web development, and creating innovative solutions. 
              Currently pursuing Bachelor's in Cyber Security while building amazing digital experiences.
            </Typography>
            
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              justifyContent="center" 
              mb={4}
            >
              <Button 
                variant="contained" 
                size="large"
                startIcon={<DownloadIcon />}
                sx={{ 
                  borderRadius: 50,
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(45deg, #4ecdc4, #45b7d1)',
                  boxShadow: '0 8px 16px rgba(78, 205, 196, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #45b7d1, #4ecdc4)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 24px rgba(78, 205, 196, 0.4)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Download Resume
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                startIcon={<EmailIcon />}
                href="mailto:nishchitsubedi0@gmail.com"
                sx={{ 
                  borderRadius: 50,
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  borderColor: '#4ecdc4',
                  color: '#4ecdc4',
                  '&:hover': {
                    borderColor: '#45b7d1',
                    backgroundColor: 'rgba(78, 205, 196, 0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Get In Touch
              </Button>
            </Stack>
            
            <Stack 
              direction="row" 
              spacing={3} 
              justifyContent="center"
              sx={{ mb: 2 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', color: '#b8b8b8' }}>
                <PhoneIcon sx={{ mr: 1, color: '#4ecdc4' }} />
                <Typography>+977 9861733101</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', color: '#b8b8b8' }}>
                <EmailIcon sx={{ mr: 1, color: '#4ecdc4' }} />
                <Typography>nishchitsubedi0@gmail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', color: '#b8b8b8' }}>
                <LocationOnIcon sx={{ mr: 1, color: '#4ecdc4' }} />
                <Typography>Nepal</Typography>
              </Box>
            </Stack>
            
            <Stack 
              direction="row" 
              spacing={2} 
              justifyContent="center"
            >
              <IconButton 
                href="mailto:nishchitsubedi0@gmail.com"
                sx={{ 
                  color: '#4ecdc4',
                  bgcolor: 'rgba(78, 205, 196, 0.1)',
                  '&:hover': { 
                    bgcolor: 'rgba(78, 205, 196, 0.2)',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <EmailIcon />
              </IconButton>
              <IconButton 
                href="https://www.linkedin.com/"
                target="_blank"
                sx={{ 
                  color: '#4ecdc4',
                  bgcolor: 'rgba(78, 205, 196, 0.1)',
                  '&:hover': { 
                    bgcolor: 'rgba(78, 205, 196, 0.2)',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                href="https://github.com/"
                target="_blank"
                sx={{ 
                  color: '#4ecdc4',
                  bgcolor: 'rgba(78, 205, 196, 0.1)',
                  '&:hover': { 
                    bgcolor: 'rgba(78, 205, 196, 0.2)',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 8, position: 'relative' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
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
              About Me
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#b8b8b8',
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.8
              }}
            >
              I'm a passionate cybersecurity student and full-stack developer based in Nepal. 
              My journey in technology began with a curiosity about how systems work and evolved 
              into a deep interest in protecting them. I specialize in building secure, scalable 
              applications and conducting security assessments.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box sx={{ py: 8, background: 'rgba(255,255,255,0.02)' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
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
              Skills & Expertise
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ color: '#b8b8b8' }}
            >
              A comprehensive skill set in cybersecurity, programming, and modern technologies
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={3} key={skill.title}>
                <Card 
                  sx={{ 
                    height: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 40px rgba(${skill.color}, 0.2)`,
                      borderColor: skill.color
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>
                      {skill.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      fontWeight={700} 
                      mb={2}
                      sx={{ color: skill.color }}
                    >
                      {skill.title}
                    </Typography>
                    <Stack spacing={1}>
                      {skill.items.map((item, idx) => (
                        <Typography 
                          key={idx} 
                          variant="body2" 
                          sx={{ color: '#b8b8b8' }}
                        >
                          • {item}
                        </Typography>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Education Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
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
              Education & Certifications
            </Typography>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: 2 
          }}>
            {education.map((cert, index) => (
              <Chip
                key={cert}
                icon={<SchoolIcon />}
                label={cert}
                sx={{
                  bgcolor: 'rgba(78, 205, 196, 0.1)',
                  color: '#4ecdc4',
                  border: '1px solid rgba(78, 205, 196, 0.3)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  px: 2,
                  py: 3,
                  '&:hover': {
                    bgcolor: 'rgba(78, 205, 196, 0.2)',
                    transform: 'scale(1.05)'
                  },
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Featured Projects */}
      <Box sx={{ py: 8, background: 'rgba(255,255,255,0.02)' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
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
              Featured Projects
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ color: '#b8b8b8' }}
            >
              A showcase of my latest work in cybersecurity and web development
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {featuredProjects.filter(p => p.featured).map((project, index) => (
              <Grid item xs={12} md={4} key={project.title}>
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
                      '& .project-image': {
                        transform: 'scale(1.05)'
                      }
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <Box
                      className="project-image"
                      component="img"
                      src={project.image}
                      alt={project.title}
                      sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    <Box sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'rgba(0,0,0,0.7)',
                      borderRadius: 2,
                      px: 2,
                      py: 1
                    }}>
                      <StarIcon sx={{ color: '#ffd700', fontSize: 20 }} />
                    </Box>
                  </Box>
                  
                  <CardContent sx={{ p: 3 }}>
                    <Typography 
                      variant="h5" 
                      fontWeight={700} 
                      mb={2
                    }>
                      {project.title}
                    </Typography>
                    <Typography 
                      color="#b8b8b8" 
                      mb={3}
                      sx={{ lineHeight: 1.6 }}
                    >
                      {project.desc}
                    </Typography>
                    
                    <Stack direction="row" spacing={1} mb={3} flexWrap="wrap">
                      {project.tags.map(tag => (
                        <Chip 
                          key={tag} 
                          label={tag} 
                          size="small" 
                          sx={{ 
                            bgcolor: 'rgba(78, 205, 196, 0.1)',
                            color: '#4ecdc4',
                            fontWeight: 600
                          }} 
                        />
                      ))}
                    </Stack>
                    
                    <Stack direction="row" spacing={2}>
                      <Button 
                        variant="outlined" 
                        size="small"
                        href={project.code}
                        target="_blank"
                        sx={{ 
                          borderRadius: 2,
                          borderColor: '#4ecdc4',
                          color: '#4ecdc4',
                          '&:hover': {
                            borderColor: '#45b7d1',
                            bgcolor: 'rgba(78, 205, 196, 0.1)'
                          }
                        }}
                      >
                        Code
                      </Button>
                      {project.demo && (
                        <Button 
                          variant="contained" 
                          size="small"
                          href={project.demo}
                          target="_blank"
                          sx={{ 
                            borderRadius: 2,
                            bgcolor: '#4ecdc4',
                            '&:hover': { bgcolor: '#45b7d1' }
                          }}
                        >
                          Demo
                        </Button>
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box textAlign="center" mt={6}>
            <Button 
              variant="outlined"
              size="large"
              startIcon={<WorkIcon />}
              href="/marketplace"
              sx={{ 
                borderRadius: 50,
                px: 4,
                py: 1.5,
                fontWeight: 700,
                borderColor: '#4ecdc4',
                color: '#4ecdc4',
                '&:hover': {
                  borderColor: '#45b7d1',
                  bgcolor: 'rgba(78, 205, 196, 0.1)'
                }
              }}
            >
              View All Projects
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Side Hustle Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
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
              Side Hustle
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ color: '#b8b8b8', mb: 4 }}
            >
              Check out my gaming marketplace - a platform for buying and selling gaming items
            </Typography>
            
            <Card 
              sx={{ 
                maxWidth: 600,
                mx: 'auto',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }
              }}
            >
              <Box
                component="img"
                src="https://via.placeholder.com/600x300/1a1a2e/ffffff?text=Gaming+Marketplace"
                alt="Gaming Marketplace"
                sx={{ width: '100%', height: 200, objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" fontWeight={700} mb={2}>
                  Gaming Marketplace
                </Typography>
                <Typography color="#b8b8b8" mb={3}>
                  A platform for gamers to buy and sell battle passes, premium items, and gaming currency. 
                  Built with React, Node.js, and MySQL.
                </Typography>
                <Button 
                  variant="contained"
                  size="large"
                  href="/marketplace"
                  sx={{ 
                    borderRadius: 50,
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                    bgcolor: '#4ecdc4',
                    '&:hover': { bgcolor: '#45b7d1' }
                  }}
                >
                  Explore Marketplace
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Portfolio;