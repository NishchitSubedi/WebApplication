import React, { useState } from 'react';
import {
  Box, Typography, Card, CardContent, Grid, Container, Stack, Chip,
  LinearProgress, Paper, IconButton, Dialog, DialogTitle, DialogContent,
  DialogActions, Button, Avatar
} from '@mui/material';
import {
  Security, Code, Terminal, Storage, School, Work, Star,
  TrendingUp, Psychology, Build, Speed, Verified
} from '@mui/icons-material';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillCategories = [
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: <Security sx={{ fontSize: 40, color: '#ff6b6b' }} />,
      color: '#ff6b6b',
      description: 'Comprehensive knowledge of network security, penetration testing, and digital forensics',
      skills: [
        { name: 'Network Security', level: 90, description: 'Firewall configuration, VPN setup, network monitoring' },
        { name: 'Penetration Testing', level: 85, description: 'Web app testing, network reconnaissance, social engineering' },
        { name: 'Vulnerability Assessment', level: 88, description: 'Automated scanning, manual testing, risk analysis' },
        { name: 'Digital Forensics', level: 82, description: 'Evidence collection, timeline analysis, report writing' },
        { name: 'Incident Response', level: 80, description: 'Threat hunting, containment, recovery procedures' },
        { name: 'Security Analysis', level: 85, description: 'Threat intelligence, malware analysis, security architecture' }
      ]
    },
    {
      id: 'programming',
      title: 'Programming',
      icon: <Code sx={{ fontSize: 40, color: '#4ecdc4' }} />,
      color: '#4ecdc4',
      description: 'Proficient in multiple programming languages and frameworks',
      skills: [
        { name: 'JavaScript/TypeScript', level: 92, description: 'React, Node.js, Express, modern ES6+ features' },
        { name: 'Python', level: 88, description: 'Security tools, automation, data analysis, web scraping' },
        { name: 'Java', level: 75, description: 'Android development, enterprise applications, Spring framework' },
        { name: 'C/C++', level: 70, description: 'System programming, performance optimization, embedded systems' },
        { name: 'React.js', level: 90, description: 'Component architecture, hooks, state management, performance' },
        { name: 'Node.js', level: 85, description: 'Backend development, REST APIs, real-time applications' }
      ]
    },
    {
      id: 'security-tools',
      title: 'Security Tools',
      icon: <Terminal sx={{ fontSize: 40, color: '#45b7d1' }} />,
      color: '#45b7d1',
      description: 'Expertise in industry-standard security and penetration testing tools',
      skills: [
        { name: 'Wireshark', level: 88, description: 'Network protocol analysis, packet capture, traffic analysis' },
        { name: 'Nmap', level: 85, description: 'Network discovery, port scanning, service enumeration' },
        { name: 'Metasploit', level: 80, description: 'Exploit development, payload generation, post-exploitation' },
        { name: 'Burp Suite', level: 82, description: 'Web application testing, API security, vulnerability scanning' },
        { name: 'Kali Linux', level: 90, description: 'Penetration testing environment, tool integration, custom scripts' },
        { name: 'OWASP ZAP', level: 78, description: 'Automated security testing, vulnerability assessment, reporting' }
      ]
    },
    {
      id: 'technologies',
      title: 'Technologies',
      icon: <Storage sx={{ fontSize: 40, color: '#96ceb4' }} />,
      color: '#96ceb4',
      description: 'Experience with modern technologies and cloud platforms',
      skills: [
        { name: 'Docker', level: 85, description: 'Containerization, orchestration, deployment automation' },
        { name: 'AWS', level: 75, description: 'Cloud security, infrastructure management, serverless architecture' },
        { name: 'Linux Administration', level: 88, description: 'System administration, security hardening, automation' },
        { name: 'Database Security', level: 80, description: 'SQL injection prevention, access control, encryption' },
        { name: 'Firewall Configuration', level: 85, description: 'Network security, rule management, monitoring' },
        { name: 'VPN Setup', level: 82, description: 'Remote access, site-to-site VPNs, security protocols' }
      ]
    }
  ];

  const certifications = [
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      year: 2024,
      status: "Active",
      icon: <Verified sx={{ color: '#4caf50' }} />
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      year: 2023,
      status: "Active",
      icon: <Security sx={{ color: '#ff9800' }} />
    },
    {
      name: "CISSP Associate",
      issuer: "ISC²",
      year: 2024,
      status: "In Progress",
      icon: <School sx={{ color: '#2196f3' }} />
    }
  ];

  const achievements = [
    {
      title: "Security Research",
      description: "Published research on emerging cybersecurity threats and mitigation strategies",
      icon: <TrendingUp />
    },
    {
      title: "Bug Bounty Hunter",
      description: "Successfully identified and reported vulnerabilities in major platforms",
      icon: <Star />
    },
    {
      title: "Open Source Contributor",
      description: "Contributed to various security tools and frameworks",
      icon: <Code />
    },
    {
      title: "Security Conference Speaker",
      description: "Presented at local cybersecurity meetups and conferences",
      icon: <Psychology />
    }
  ];

  const getProgressColor = (level) => {
    if (level >= 90) return '#4caf50';
    if (level >= 80) return '#2196f3';
    if (level >= 70) return '#ff9800';
    return '#f44336';
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
            Skills & Expertise
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#b8b8b8',
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            A comprehensive skill set developed through education, projects, and hands-on experience
          </Typography>
        </Box>

        {/* Skill Categories */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={category.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    borderColor: category.color
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    {category.icon}
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h5" fontWeight={700} sx={{ color: category.color }}>
                        {category.title}
                      </Typography>
                      <Typography variant="body2" color="#b8b8b8">
                        {category.description}
                      </Typography>
                    </Box>
                  </Box>

                  <Stack spacing={2}>
                    {category.skills.map((skill, skillIndex) => (
                      <Box key={skill.name}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" fontWeight={600}>
                            {skill.name}
                          </Typography>
                          <Typography variant="body2" color="#b8b8b8">
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            bgcolor: 'rgba(255,255,255,0.1)',
                            '& .MuiLinearProgress-bar': {
                              bgcolor: getProgressColor(skill.level),
                              borderRadius: 4
                            }
                          }}
                        />
                        <Typography 
                          variant="caption" 
                          color="#b8b8b8" 
                          sx={{ mt: 0.5, display: 'block' }}
                        >
                          {skill.description}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Certifications & Achievements */}
        <Grid container spacing={4}>
          {/* Certifications */}
          <Grid item xs={12} md={6}>
            <Paper 
              sx={{ 
                p: 4,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 4
              }}
            >
              <Typography variant="h5" fontWeight={700} sx={{ color: '#4ecdc4', mb: 3 }}>
                Certifications
              </Typography>
              <Stack spacing={2}>
                {certifications.map((cert, index) => (
                  <Box 
                    key={cert.name}
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
                    <Avatar sx={{ bgcolor: 'rgba(78, 205, 196, 0.1)', mr: 2 }}>
                      {cert.icon}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body1" fontWeight={600}>
                        {cert.name}
                      </Typography>
                      <Typography variant="body2" color="#b8b8b8">
                        {cert.issuer} • {cert.year}
                      </Typography>
                    </Box>
                    <Chip 
                      label={cert.status} 
                      size="small"
                      sx={{
                        bgcolor: cert.status === 'Active' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 152, 0, 0.1)',
                        color: cert.status === 'Active' ? '#4caf50' : '#ff9800',
                        fontWeight: 600
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>

          {/* Achievements */}
          <Grid item xs={12} md={6}>
            <Paper 
              sx={{ 
                p: 4,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 4
              }}
            >
              <Typography variant="h5" fontWeight={700} sx={{ color: '#4ecdc4', mb: 3 }}>
                Achievements
              </Typography>
              <Stack spacing={2}>
                {achievements.map((achievement, index) => (
                  <Box 
                    key={achievement.title}
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
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
                    <Avatar sx={{ bgcolor: 'rgba(78, 205, 196, 0.1)', mr: 2, mt: 0.5 }}>
                      {achievement.icon}
                    </Avatar>
                    <Box>
                      <Typography variant="body1" fontWeight={600}>
                        {achievement.title}
                      </Typography>
                      <Typography variant="body2" color="#b8b8b8">
                        {achievement.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        {/* Skill Summary */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Paper 
            sx={{ 
              p: 4,
              background: 'linear-gradient(45deg, #4ecdc4, #45b7d1)',
              borderRadius: 4,
              overflow: 'hidden'
            }}
          >
            <Typography variant="h4" fontWeight={700} sx={{ color: 'white', mb: 2 }}>
              Continuous Learning
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', mb: 3 }}>
              I'm constantly expanding my skills through courses, certifications, and hands-on projects
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
              <Chip 
                icon={<Build />} 
                label="Always Learning" 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontWeight: 600
                }} 
              />
              <Chip 
                icon={<Speed />} 
                label="Fast Learner" 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontWeight: 600
                }} 
              />
              <Chip 
                icon={<Work />} 
                label="Hands-on Experience" 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontWeight: 600
                }} 
              />
            </Stack>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills; 