import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Card, CardContent, CardMedia, Grid, Button, Paper,
  Container, Stack, Chip, Avatar, IconButton, Dialog, DialogTitle,
  DialogContent, DialogActions, Alert, Badge, Fab, TextField,
  FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import {
  Add, Edit, Delete, Visibility, VisibilityOff, ShoppingCart,
  Star, LocalOffer, Gamepad, Security, Diamond, MoreVert
} from '@mui/icons-material';
import axios from 'axios';

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock data for demonstration
  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        name: "Fortnite Battle Pass Season 5",
        description: "Complete battle pass with all skins, emotes, and V-Bucks",
        price: 950,
        category: "battle-pass",
        platform: "PC",
        game: "Fortnite",
        image: "https://via.placeholder.com/300x200/7c3aed/ffffff?text=Fortnite+BP",
        status: "available",
        views: 45,
        sales: 3
      },
      {
        id: 2,
        name: "Valorant Premium Collection",
        description: "Exclusive weapon skins and player cards",
        price: 1800,
        category: "premium",
        platform: "PC",
        game: "Valorant",
        image: "https://via.placeholder.com/300x200/f59e0b/ffffff?text=Valorant+Skin",
        status: "sold",
        views: 32,
        sales: 1
      },
      {
        id: 3,
        name: "PUBG Mobile UC Package",
        description: "1000 UC for PUBG Mobile with bonus items",
        price: 800,
        category: "currency",
        platform: "Mobile",
        game: "PUBG Mobile",
        image: "https://via.placeholder.com/300x200/10b981/ffffff?text=PUBG+UC",
        status: "available",
        views: 28,
        sales: 2
      }
    ];
    setProducts(mockProducts);
    setLoading(false);
  }, []);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'battle-pass': return <Gamepad />;
      case 'premium': return <Diamond />;
      case 'currency': return <LocalOffer />;
      default: return <Security />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'battle-pass': return '#7c3aed';
      case 'premium': return '#06b6d4';
      case 'currency': return '#f59e0b';
      default: return '#10b981';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'success';
      case 'sold': return 'error';
      case 'pending': return 'warning';
      default: return 'default';
    }
  };

  const filteredProducts = products.filter(product => {
    if (filterStatus === 'all') return true;
    return product.status === filterStatus;
  });

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setShowEditDialog(true);
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

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
            My Products
          </Typography>
          <Typography color="text.secondary" variant="h6" mb={4}>
            Manage your listed gaming items and track their performance
          </Typography>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={4} sx={{
              p: 3,
              borderRadius: 4,
              background: 'rgba(36,37,46,0.95)',
              backdropFilter: 'blur(10px)',
              textAlign: 'center'
            }}>
              <Typography variant="h4" fontWeight={700} color="primary">
                {products.length}
              </Typography>
              <Typography color="text.secondary">
                Total Products
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={4} sx={{
              p: 3,
              borderRadius: 4,
              background: 'rgba(36,37,46,0.95)',
              backdropFilter: 'blur(10px)',
              textAlign: 'center'
            }}>
              <Typography variant="h4" fontWeight={700} color="success.main">
                {products.filter(p => p.status === 'available').length}
              </Typography>
              <Typography color="text.secondary">
                Available
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={4} sx={{
              p: 3,
              borderRadius: 4,
              background: 'rgba(36,37,46,0.95)',
              backdropFilter: 'blur(10px)',
              textAlign: 'center'
            }}>
              <Typography variant="h4" fontWeight={700} color="error.main">
                {products.filter(p => p.status === 'sold').length}
              </Typography>
              <Typography color="text.secondary">
                Sold
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={4} sx={{
              p: 3,
              borderRadius: 4,
              background: 'rgba(36,37,46,0.95)',
              backdropFilter: 'blur(10px)',
              textAlign: 'center'
            }}>
              <Typography variant="h4" fontWeight={700} color="secondary">
                {products.reduce((sum, p) => sum + p.sales, 0)}
              </Typography>
              <Typography color="text.secondary">
                Total Sales
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Filters and Actions */}
        <Paper elevation={4} sx={{
          p: 3,
          mb: 4,
          borderRadius: 4,
          background: 'rgba(36,37,46,0.95)',
          backdropFilter: 'blur(10px)'
        }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Filter by Status</InputLabel>
                <Select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  sx={{ borderRadius: 3 }}
                >
                  <MenuItem value="all">All Products</MenuItem>
                  <MenuItem value="available">Available</MenuItem>
                  <MenuItem value="sold">Sold</MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                fullWidth
                variant="contained"
                startIcon={<Add />}
                onClick={() => setShowAddDialog(true)}
                sx={{
                  borderRadius: 3,
                  fontWeight: 700,
                  py: 1.5,
                  background: 'linear-gradient(45deg, #7c3aed 30%, #06b6d4 90%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #6d28d9 30%, #0891b2 90%)'
                  }
                }}
              >
                Add New Product
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Products Grid */}
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{
                height: '100%',
                borderRadius: 4,
                background: 'rgba(36,37,46,0.95)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.3)'
                }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  sx={{ position: 'relative' }}
                />
                <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                  <Chip
                    icon={getCategoryIcon(product.category)}
                    label={product.category.replace('-', ' ').toUpperCase()}
                    size="small"
                    sx={{
                      bgcolor: getCategoryColor(product.category),
                      color: 'white',
                      fontWeight: 700
                    }}
                  />
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" fontWeight={700} mb={1} noWrap>
                    {product.name}
                  </Typography>
                  <Typography color="text.secondary" fontSize={14} mb={2} sx={{ height: 40, overflow: 'hidden' }}>
                    {product.description}
                  </Typography>
                  
                  <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h5" fontWeight={700} color="primary">
                      ₹{product.price}
                    </Typography>
                    <Chip 
                      label={product.status} 
                      size="small" 
                      color={getStatusColor(product.status)}
                      variant="outlined"
                    />
                  </Stack>
                  
                  <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Visibility sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {product.views} views
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <ShoppingCart sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {product.sales} sales
                      </Typography>
                    </Box>
                  </Stack>
                  
                  <Stack direction="row" spacing={1}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<Edit />}
                      onClick={() => handleEditProduct(product)}
                      sx={{ borderRadius: 2, flex: 1 }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      startIcon={<Delete />}
                      onClick={() => handleDeleteProduct(product.id)}
                      sx={{ borderRadius: 2, flex: 1 }}
                    >
                      Delete
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredProducts.length === 0 && (
          <Box textAlign="center" py={8}>
            <Typography variant="h5" color="text.secondary" mb={2}>
              No products found
            </Typography>
            <Typography color="text.secondary" mb={3}>
              {filterStatus === 'all' 
                ? 'You haven\'t listed any products yet.' 
                : `No ${filterStatus} products found.`
              }
            </Typography>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={() => setShowAddDialog(true)}
              sx={{
                borderRadius: 3,
                fontWeight: 700,
                background: 'linear-gradient(45deg, #7c3aed 30%, #06b6d4 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #6d28d9 30%, #0891b2 90%)'
                }
              }}
            >
              Add Your First Product
            </Button>
          </Box>
        )}
      </Container>

      {/* Floating Action Button */}
      <Fab
        color="secondary"
        aria-label="add product"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          bgcolor: '#7c3aed',
          '&:hover': { bgcolor: '#6d28d9' }
        }}
        onClick={() => setShowAddDialog(true)}
      >
        <Add />
      </Fab>
    </Box>
  );
};

export default MyProducts;