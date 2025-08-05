import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem,
  IconButton, Avatar, Chip
} from '@mui/material';
import {
  Menu as MenuIcon, AccountCircle, ShoppingCart, Work
} from '@mui/icons-material';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('token');

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMenuAnchor(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    handleMenuClose();
    window.location.reload();
  };

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        background: 'rgba(15, 15, 35, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo/Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography 
            variant="h5" 
            component={Link} 
            to="/" 
            sx={{ 
              textDecoration: 'none',
              fontWeight: 800,
              background: 'linear-gradient(45deg, #4ecdc4, #45b7d1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mr: 4
            }}
          >
            Nishchit Subedi
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: isActive('/') ? '#4ecdc4' : 'white',
              fontWeight: isActive('/') ? 700 : 500,
              borderRadius: 2,
              px: 3,
              py: 1,
              '&:hover': {
                backgroundColor: 'rgba(78, 205, 196, 0.1)',
                color: '#4ecdc4'
              }
            }}
          >
            Portfolio
          </Button>
          
          <Button
            component={Link}
            to="/marketplace"
            startIcon={<ShoppingCart />}
            sx={{
              color: isActive('/marketplace') ? '#4ecdc4' : 'white',
              fontWeight: isActive('/marketplace') ? 700 : 500,
              borderRadius: 2,
              px: 3,
              py: 1,
              '&:hover': {
                backgroundColor: 'rgba(78, 205, 196, 0.1)',
                color: '#4ecdc4'
              }
            }}
          >
            <Chip 
              label="Side Hustle" 
              size="small" 
              sx={{ 
                mr: 1,
                bgcolor: 'rgba(255, 193, 7, 0.2)',
                color: '#ffc107',
                fontSize: '0.7rem',
                height: 20
              }} 
            />
            Marketplace
          </Button>

          {isLoggedIn ? (
            <>
              <Button
                component={Link}
                to="/my-products"
                sx={{
                  color: isActive('/my-products') ? '#4ecdc4' : 'white',
                  fontWeight: isActive('/my-products') ? 700 : 500,
                  borderRadius: 2,
                  px: 3,
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(78, 205, 196, 0.1)',
                    color: '#4ecdc4'
                  }
                }}
              >
                My Products
              </Button>
              <Button
                component={Link}
                to="/my-orders"
                sx={{
                  color: isActive('/my-orders') ? '#4ecdc4' : 'white',
                  fontWeight: isActive('/my-orders') ? 700 : 500,
                  borderRadius: 2,
                  px: 3,
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(78, 205, 196, 0.1)',
                    color: '#4ecdc4'
                  }
                }}
              >
                My Orders
              </Button>
              <IconButton
                onClick={handleProfileMenuOpen}
                sx={{
                  color: 'white',
                  bgcolor: 'rgba(78, 205, 196, 0.1)',
                  '&:hover': {
                    bgcolor: 'rgba(78, 205, 196, 0.2)'
                  }
                }}
              >
                <AccountCircle />
              </IconButton>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                component={Link}
                to="/login"
                variant="outlined"
                sx={{
                  borderColor: '#4ecdc4',
                  color: '#4ecdc4',
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: '#45b7d1',
                    backgroundColor: 'rgba(78, 205, 196, 0.1)'
                  }
                }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/register"
                variant="contained"
                sx={{
                  bgcolor: '#4ecdc4',
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: '#45b7d1'
                  }
                }}
              >
                Register
              </Button>
            </Box>
          )}
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            onClick={handleMobileMenuOpen}
            sx={{ color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Profile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              bgcolor: 'rgba(15, 15, 35, 0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              mt: 1
            }
          }}
        >
          <MenuItem 
            component={Link} 
            to="/profile" 
            onClick={handleMenuClose}
            sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(78, 205, 196, 0.1)' } }}
          >
            Profile
          </MenuItem>
          <MenuItem 
            component={Link} 
            to="/my-sales" 
            onClick={handleMenuClose}
            sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(78, 205, 196, 0.1)' } }}
          >
            My Sales
          </MenuItem>
          <MenuItem 
            onClick={handleLogout}
            sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(244, 67, 54, 0.1)' } }}
          >
            Logout
          </MenuItem>
        </Menu>

        {/* Mobile Menu */}
        <Menu
          anchorEl={mobileMenuAnchor}
          open={Boolean(mobileMenuAnchor)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              bgcolor: 'rgba(15, 15, 35, 0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              mt: 1,
              minWidth: 200
            }
          }}
        >
          <MenuItem 
            component={Link} 
            to="/" 
            onClick={handleMenuClose}
            sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(78, 205, 196, 0.1)' } }}
          >
            Portfolio
          </MenuItem>
          <MenuItem 
            component={Link} 
            to="/marketplace" 
            onClick={handleMenuClose}
            sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(78, 205, 196, 0.1)' } }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ShoppingCart />
              <Typography>Marketplace</Typography>
              <Chip 
                label="Side Hustle" 
                size="small" 
                sx={{ 
                  bgcolor: 'rgba(255, 193, 7, 0.2)',
                  color: '#ffc107',
                  fontSize: '0.7rem',
                  height: 20
                }} 
              />
            </Box>
          </MenuItem>
          {isLoggedIn ? (
            <>
              <MenuItem 
                component={Link} 
                to="/my-products" 
                onClick={handleMenuClose}
                sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(78, 205, 196, 0.1)' } }}
              >
                My Products
              </MenuItem>
              <MenuItem 
                component={Link} 
                to="/my-orders" 
                onClick={handleMenuClose}
                sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(78, 205, 196, 0.1)' } }}
              >
                My Orders
              </MenuItem>
              <MenuItem 
                component={Link} 
                to="/profile" 
                onClick={handleMenuClose}
                sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(78, 205, 196, 0.1)' } }}
              >
                Profile
              </MenuItem>
              <MenuItem 
                onClick={handleLogout}
                sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(244, 67, 54, 0.1)' } }}
              >
                Logout
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem 
                component={Link} 
                to="/login" 
                onClick={handleMenuClose}
                sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(78, 205, 196, 0.1)' } }}
              >
                Login
              </MenuItem>
              <MenuItem 
                component={Link} 
                to="/register" 
                onClick={handleMenuClose}
                sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(78, 205, 196, 0.1)' } }}
              >
                Register
              </MenuItem>
            </>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;