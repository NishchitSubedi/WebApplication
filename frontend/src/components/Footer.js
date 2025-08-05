import React from 'react';
import {
  Box, Typography, Container, Grid, Stack, IconButton, Divider,
  Link, Paper
} from '@mui/material';
import {
  Facebook, Twitter, Instagram, LinkedIn, GitHub, YouTube,
  Email, Phone, LocationOn, Copyright
} from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Paper elevation={8} sx={{
      mt: 8,
      background: 'rgba(24,24,27,0.95)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box mb={3}>
              <Typography variant="h4" fontWeight={700} sx={{
                background: 'linear-gradient(90deg,#7c3aed,#06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}>
                Gaming Marketplace
              </Typography>
              <Typography color="text.secondary" mb={3}>
                Your trusted platform for buying and selling gaming items, battle passes, 
                and premium content. Join thousands of gamers worldwide.
              </Typography>
            </Box>
            
            <Stack direction="row" spacing={2}>
              <IconButton
                color="primary"
                href="#"
                sx={{
                  bgcolor: 'rgba(124,58,237,0.1)',
                  '&:hover': { bgcolor: 'rgba(124,58,237,0.2)' }
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="primary"
                href="#"
                sx={{
                  bgcolor: 'rgba(124,58,237,0.1)',
                  '&:hover': { bgcolor: 'rgba(124,58,237,0.2)' }
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                color="primary"
                href="#"
                sx={{
                  bgcolor: 'rgba(124,58,237,0.1)',
                  '&:hover': { bgcolor: 'rgba(124,58,237,0.2)' }
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                color="primary"
                href="#"
                sx={{
                  bgcolor: 'rgba(124,58,237,0.1)',
                  '&:hover': { bgcolor: 'rgba(124,58,237,0.2)' }
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                color="primary"
                href="#"
                sx={{
                  bgcolor: 'rgba(124,58,237,0.1)',
                  '&:hover': { bgcolor: 'rgba(124,58,237,0.2)' }
                }}
              >
                <GitHub />
              </IconButton>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" fontWeight={700} mb={3} sx={{ color: '#7c3aed' }}>
              Quick Links
            </Typography>
            <Stack spacing={2}>
              <Link href="/" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: '#7c3aed' } }}>
                Home
              </Link>
              <Link href="/marketplace" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: '#7c3aed' } }}>
                Marketplace
              </Link>
              <Link href="/profile" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: '#7c3aed' } }}>
                Profile
              </Link>
              <Link href="/my-products" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: '#7c3aed' } }}>
                My Products
              </Link>
              <Link href="/my-orders" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: '#7c3aed' } }}>
                My Orders
              </Link>
            </Stack>
          </Grid>

          {/* Categories */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" fontWeight={700} mb={3} sx={{ color: '#7c3aed' }}>
              Categories
            </Typography>
            <Stack spacing={2}>
              <Link href="/marketplace?category=battle-pass" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: '#7c3aed' } }}>
                Battle Pass
              </Link>
              <Link href="/marketplace?category=premium" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: '#7c3aed' } }}>
                Premium Items
              </Link>
              <Link href="/marketplace?category=currency" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: '#7c3aed' } }}>
                Gaming Currency
              </Link>
              <Link href="/marketplace?category=skins" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: '#7c3aed' } }}>
                Skins & Cosmetics
              </Link>
              <Link href="/marketplace?category=accounts" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: '#7c3aed' } }}>
                Gaming Accounts
              </Link>
            </Stack>
          </Grid>

          {/* Support */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" fontWeight={700} mb={3} sx={{ color: '#7c3aed' }}>
              Support
            </Typography>
            <Stack spacing={2}>
              <Link href="#" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: '#7c3aed' } }}>
                Help Center
              </Link>
              <Link href="#" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: '#7c3aed' } }}>
                Contact Us
              </Link>
              <Link href="#" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: '#7c3aed' } }}>
                Privacy Policy
              </Link>
              <Link href="#" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: '#7c3aed' } }}>
                Terms of Service
              </Link>
              <Link href="#" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: '#7c3aed' } }}>
                Refund Policy
              </Link>
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" fontWeight={700} mb={3} sx={{ color: '#7c3aed' }}>
              Contact
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Email sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
                <Typography color="text.secondary" fontSize={14}>
                  support@gamingmarketplace.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Phone sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
                <Typography color="text.secondary" fontSize={14}>
                  +977 9861733101
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
                <Typography color="text.secondary" fontSize={14}>
                  Nepal
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Copyright sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
            <Typography color="text.secondary" fontSize={14}>
              {currentYear} Gaming Marketplace. All rights reserved.
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mt: { xs: 2, md: 0 } }}>
            <Typography color="text.secondary" fontSize={14} mr={2}>
              Powered by
            </Typography>
            <Typography fontWeight={700} sx={{ color: '#7c3aed' }}>
              Nishchit Subedi
            </Typography>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer; 