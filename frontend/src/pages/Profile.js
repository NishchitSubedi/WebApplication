import React, { useState, useEffect } from 'react';
import {
  Box, Typography, TextField, Button, Paper, Container,
  Stack, Avatar, Grid, Card, CardContent, Chip, Divider,
  IconButton, Dialog, DialogTitle, DialogContent, DialogActions,
  Alert, Badge, Switch, FormControlLabel
} from '@mui/material';
import {
  Edit, Save, Cancel, Person, Email, Phone, School,
  LocationOn, Code, Work, Security, Visibility, VisibilityOff,
  LinkedIn, GitHub, Twitter, Instagram
} from '@mui/icons-material';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [editForm, setEditForm] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please login to view your profile');
        setLoading(false);
        return;
      }

      const response = await axios.get('http://localhost:5000/api/auth/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data);
      setEditForm(response.data);
    } catch (err) {
      setError('Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
    setEditForm(user);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditForm(user);
    setError('');
  };

  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('http://localhost:5000/api/auth/profile', editForm, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data);
      setEditMode(false);
      setSuccessMessage('Profile updated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update profile');
    }
  };

  if (loading) {
    return (
      <Box sx={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #18181b 0%, #23272f 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography variant="h5" color="text.secondary">
          Loading profile...
        </Typography>
      </Box>
    );
  }

  if (error && !user) {
    return (
      <Box sx={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #18181b 0%, #23272f 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Alert severity="error" sx={{ maxWidth: 400 }}>
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #18181b 0%, #23272f 100%)',
      py: 4
    }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h2" fontWeight={700} sx={{
            background: 'linear-gradient(90deg,#7c3aed,#06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2
          }}>
            My Profile
          </Typography>
          <Typography color="text.secondary" variant="h6">
            Manage your account and personal information
          </Typography>
        </Box>

        {/* Success Message */}
        {successMessage && (
          <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
            {successMessage}
          </Alert>
        )}

        {/* Error Alert */}
        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
            {error}
          </Alert>
        )}

        <Grid container spacing={4}>
          {/* Profile Card */}
          <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{
              p: 4,
              borderRadius: 4,
              background: 'rgba(36,37,46,0.95)',
              backdropFilter: 'blur(10px)',
              textAlign: 'center'
            }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <IconButton
                    size="small"
                    sx={{
                      bgcolor: '#7c3aed',
                      color: 'white',
                      '&:hover': { bgcolor: '#6d28d9' }
                    }}
                    onClick={handleEdit}
                  >
                    <Edit fontSize="small" />
                  </IconButton>
                }
              >
                <Avatar
                  src={user?.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.username}`}
                  sx={{
                    width: 120,
                    height: 120,
                    mb: 2,
                    border: '4px solid #7c3aed',
                    bgcolor: '#7c3aed'
                  }}
                >
                  {user?.name?.charAt(0) || user?.username?.charAt(0)}
                </Avatar>
              </Badge>

              <Typography variant="h4" fontWeight={700} mb={1}>
                {user?.name || user?.username}
              </Typography>
              <Typography color="text.secondary" mb={2}>
                {user?.education || 'Student'}
              </Typography>

              <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
                <IconButton color="primary" href={`mailto:${user?.email}`}>
                  <Email />
                </IconButton>
                <IconButton color="primary" href={`tel:${user?.phone}`}>
                  <Phone />
                </IconButton>
                <IconButton color="primary" href="#">
                  <LinkedIn />
                </IconButton>
                <IconButton color="primary" href="#">
                  <GitHub />
                </IconButton>
              </Stack>

              <Chip
                label={user?.role || 'User'}
                color="secondary"
                sx={{ fontWeight: 700 }}
              />
            </Paper>
          </Grid>

          {/* Profile Details */}
          <Grid item xs={12} md={8}>
            <Paper elevation={4} sx={{
              p: 4,
              borderRadius: 4,
              background: 'rgba(36,37,46,0.95)',
              backdropFilter: 'blur(10px)'
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" fontWeight={700} sx={{ color: '#7c3aed' }}>
                  Personal Information
                </Typography>
                {!editMode ? (
                  <Button
                    variant="contained"
                    startIcon={<Edit />}
                    onClick={handleEdit}
                    sx={{
                      borderRadius: 3,
                      background: 'linear-gradient(45deg, #7c3aed 30%, #06b6d4 90%)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #6d28d9 30%, #0891b2 90%)'
                      }
                    }}
                  >
                    Edit Profile
                  </Button>
                ) : (
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      startIcon={<Save />}
                      onClick={handleSave}
                      sx={{
                        borderRadius: 3,
                        background: 'linear-gradient(45deg, #10b981 30%, #059669 90%)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #059669 30%, #047857 90%)'
                        }
                      }}
                    >
                      Save
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<Cancel />}
                      onClick={handleCancel}
                      sx={{ borderRadius: 3 }}
                    >
                      Cancel
                    </Button>
                  </Stack>
                )}
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={editForm.name || ''}
                    onChange={handleChange}
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: <Person sx={{ mr: 1, color: 'text.secondary' }} />
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        '&:hover fieldset': { borderColor: '#7c3aed' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    value={editForm.username || ''}
                    disabled
                    InputProps={{
                      startAdornment: <Person sx={{ mr: 1, color: 'text.secondary' }} />
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={editForm.email || ''}
                    onChange={handleChange}
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: <Email sx={{ mr: 1, color: 'text.secondary' }} />
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        '&:hover fieldset': { borderColor: '#7c3aed' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={editForm.phone || ''}
                    onChange={handleChange}
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: <Phone sx={{ mr: 1, color: 'text.secondary' }} />
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        '&:hover fieldset': { borderColor: '#7c3aed' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Education"
                    name="education"
                    value={editForm.education || ''}
                    onChange={handleChange}
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: <School sx={{ mr: 1, color: 'text.secondary' }} />
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        '&:hover fieldset': { borderColor: '#7c3aed' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Location"
                    name="location"
                    value={editForm.location || ''}
                    onChange={handleChange}
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: <LocationOn sx={{ mr: 1, color: 'text.secondary' }} />
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        '&:hover fieldset': { borderColor: '#7c3aed' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Skills"
                    name="skills"
                    value={editForm.skills || ''}
                    onChange={handleChange}
                    disabled={!editMode}
                    multiline
                    rows={3}
                    InputProps={{
                      startAdornment: <Code sx={{ mr: 1, color: 'text.secondary' }} />
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        '&:hover fieldset': { borderColor: '#7c3aed' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Projects"
                    name="projects"
                    value={editForm.projects || ''}
                    onChange={handleChange}
                    disabled={!editMode}
                    multiline
                    rows={3}
                    InputProps={{
                      startAdornment: <Work sx={{ mr: 1, color: 'text.secondary' }} />
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        '&:hover fieldset': { borderColor: '#7c3aed' }
                      }
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {/* Account Settings */}
        <Paper elevation={4} sx={{
          p: 4,
          borderRadius: 4,
          background: 'rgba(36,37,46,0.95)',
          backdropFilter: 'blur(10px)',
          mt: 4
        }}>
          <Typography variant="h5" fontWeight={700} mb={3} sx={{ color: '#7c3aed' }}>
            Account Settings
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Change Password
              </Typography>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label="Current Password"
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    startAdornment: <Security sx={{ mr: 1, color: 'text.secondary' }} />,
                    endAdornment: (
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    )
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 3
                    }
                  }}
                />
                <TextField
                  fullWidth
                  label="New Password"
                  type="password"
                  InputProps={{
                    startAdornment: <Security sx={{ mr: 1, color: 'text.secondary' }} />
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 3
                    }
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 3,
                    background: 'linear-gradient(45deg, #7c3aed 30%, #06b6d4 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #6d28d9 30%, #0891b2 90%)'
                    }
                  }}
                >
                  Update Password
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Notifications
              </Typography>
              <Stack spacing={2}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Email notifications"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="SMS notifications"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="Marketing emails"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Order updates"
                />
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Profile;