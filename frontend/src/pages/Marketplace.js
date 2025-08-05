import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Card, CardContent, CardMedia, Grid, Button, Paper,
  Container, Stack, Chip, Avatar, IconButton, Dialog, DialogTitle,
  DialogContent, DialogActions, Alert, Badge, TextField, InputAdornment,
  FormControl, InputLabel, Select, MenuItem, Fab
} from '@mui/material';
import {
  ShoppingCart, LocalShipping, CheckCircle, Cancel, Receipt,
  Star, LocalOffer, Gamepad, Security, Diamond, MoreVert,
  Payment, Schedule, Done, Error, Search, FilterList, Add,
  TrendingUp, AttachMoney, Sell
} from '@mui/icons-material';
import SellProduct from '../components/SellProduct';
import BuyProductModal from '../components/BuyProductModal';
import axios from 'axios';

// Mock data for demonstration
const mockProducts = [
  {
    id: 1,
    name: 'Fortnite Battle Pass',
    description: 'Complete Season 5 Battle Pass with all rewards unlocked',
    price: 950,
    category: 'Battle Pass',
    platform: 'PC',
    game: 'Fortnite',
    image: 'https://via.placeholder.com/300x200/1a1a2e/ffffff?text=Fortnite+BP',
    seller: 'GamingPro',
    rating: 4.8,
    sales: 45,
    condition: 'New'
  },
  {
    id: 2,
    name: 'Valorant Premium Bundle',
    description: 'Exclusive skin bundle with knife and gun skins',
    price: 2500,
    category: 'Premium Items',
    platform: 'PC',
    game: 'Valorant',
    image: 'https://via.placeholder.com/300x200/16213e/ffffff?text=Valorant+Bundle',
    seller: 'SkinMaster',
    rating: 4.9,
    sales: 23,
    condition: 'New'
  },
  {
    id: 3,
    name: 'PUBG Mobile UC',
    description: '1000 UC for PUBG Mobile - Instant delivery',
    price: 1200,
    category: 'Gaming Currency',
    platform: 'Mobile',
    game: 'PUBG Mobile',
    image: 'https://via.placeholder.com/300x200/0f3460/ffffff?text=PUBG+UC',
    seller: 'UCStore',
    rating: 4.7,
    sales: 67,
    condition: 'Digital'
  },
  {
    id: 4,
    name: 'GTA V Shark Cards',
    description: 'Megalodon Shark Card - $8,000,000 in-game money',
    price: 3500,
    category: 'Gaming Currency',
    platform: 'PC',
    game: 'GTA V',
    image: 'https://via.placeholder.com/300x200/533483/ffffff?text=GTA+Shark+Card',
    seller: 'MoneyMan',
    rating: 4.6,
    sales: 34,
    condition: 'Digital'
  },
  {
    id: 5,
    name: 'CS:GO Knife Skin',
    description: 'Karambit | Fade - Factory New condition',
    price: 8500,
    category: 'Premium Items',
    platform: 'PC',
    game: 'CS:GO',
    image: 'https://via.placeholder.com/300x200/7209b7/ffffff?text=CSGO+Knife',
    seller: 'SkinTrader',
    rating: 4.9,
    sales: 12,
    condition: 'Used'
  },
  {
    id: 6,
    name: 'Apex Legends Battle Pass',
    description: 'Season 12 Battle Pass with exclusive rewards',
    price: 1100,
    category: 'Battle Pass',
    platform: 'PC',
    game: 'Apex Legends',
    image: 'https://via.placeholder.com/300x200/3a0ca3/ffffff?text=Apex+BP',
    seller: 'ApexPro',
    rating: 4.8,
    sales: 28,
    condition: 'New'
  }
];

const Marketplace = () => {
  const [products, setProducts] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [selectedGame, setSelectedGame] = useState('All');
  const [sortBy, setSortBy] = useState('relevance');
  const [showSellDialog, setShowSellDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showBuyDialog, setShowBuyDialog] = useState(false);

  const categories = ['All', 'Battle Pass', 'Premium Items', 'Gaming Currency'];
  const platforms = ['All', 'PC', 'Mobile', 'Console'];
  const games = ['All', 'Fortnite', 'Valorant', 'PUBG Mobile', 'GTA V', 'CS:GO', 'Apex Legends'];

  useEffect(() => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.game.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by platform
    if (selectedPlatform !== 'All') {
      filtered = filtered.filter(product => product.platform === selectedPlatform);
    }

    // Filter by game
    if (selectedGame !== 'All') {
      filtered = filtered.filter(product => product.game === selectedGame);
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'sales':
        filtered.sort((a, b) => b.sales - a.sales);
        break;
      default:
        // Keep original order for relevance
        break;
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, selectedPlatform, selectedGame, sortBy]);

  const handleBuyProduct = (product) => {
    setSelectedProduct(product);
    setShowBuyDialog(true);
  };

  const handleSellSuccess = () => {
    setShowSellDialog(false);
    // In a real app, you would refresh the products list
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      color: 'white',
      pt: 2
    }}>
      <Container maxWidth="lg">
        {/* Header Section */}
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
            Gaming Marketplace
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#b8b8b8',
              mb: 3,
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Your side hustle platform for buying and selling gaming items, battle passes, and premium content
          </Typography>
          
          <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="center" 
            alignItems="center"
            sx={{ mb: 4 }}
          >
            <Chip 
              icon={<TrendingUp />} 
              label="Trusted Platform" 
              sx={{ 
                bgcolor: 'rgba(78, 205, 196, 0.1)',
                color: '#4ecdc4',
                fontWeight: 600
              }} 
            />
            <Chip 
              icon={<Security />} 
              label="Secure Transactions" 
              sx={{ 
                bgcolor: 'rgba(78, 205, 196, 0.1)',
                color: '#4ecdc4',
                fontWeight: 600
              }} 
            />
            <Chip 
              icon={<AttachMoney />} 
              label="Instant Delivery" 
              sx={{ 
                bgcolor: 'rgba(78, 205, 196, 0.1)',
                color: '#4ecdc4',
                fontWeight: 600
              }} 
            />
          </Stack>
        </Box>

        {/* Search and Filters */}
        <Paper 
          sx={{ 
            p: 3, 
            mb: 4,
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 4
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                placeholder="Search products..."
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
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#4ecdc4',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#4ecdc4',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#b8b8b8',
                  },
                }}
              />
            </Grid>
            
            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: '#b8b8b8' }}>Category</InputLabel>
                <Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#4ecdc4',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#4ecdc4',
                    },
                  }}
                >
                  {categories.map(category => (
                    <MenuItem key={category} value={category}>{category}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: '#b8b8b8' }}>Platform</InputLabel>
                <Select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#4ecdc4',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#4ecdc4',
                    },
                  }}
                >
                  {platforms.map(platform => (
                    <MenuItem key={platform} value={platform}>{platform}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: '#b8b8b8' }}>Game</InputLabel>
                <Select
                  value={selectedGame}
                  onChange={(e) => setSelectedGame(e.target.value)}
                  sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#4ecdc4',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#4ecdc4',
                    },
                  }}
                >
                  {games.map(game => (
                    <MenuItem key={game} value={game}>{game}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: '#b8b8b8' }}>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#4ecdc4',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#4ecdc4',
                    },
                  }}
                >
                  <MenuItem value="relevance">Relevance</MenuItem>
                  <MenuItem value="price-low">Price: Low to High</MenuItem>
                  <MenuItem value="price-high">Price: High to Low</MenuItem>
                  <MenuItem value="rating">Highest Rated</MenuItem>
                  <MenuItem value="sales">Most Popular</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>

        {/* Products Grid */}
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
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
                    image={product.image}
                    alt={product.name}
                  />
                  <Box sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    display: 'flex',
                    gap: 1
                  }}>
                    <Chip 
                      label={product.condition} 
                      size="small" 
                      sx={{ 
                        bgcolor: 'rgba(0,0,0,0.7)',
                        color: '#4ecdc4',
                        fontWeight: 600
                      }} 
                    />
                    <Chip 
                      icon={<Star sx={{ fontSize: 16 }} />}
                      label={product.rating} 
                      size="small" 
                      sx={{ 
                        bgcolor: 'rgba(0,0,0,0.7)',
                        color: '#ffd700',
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
                    {product.name}
                  </Typography>
                  
                  <Typography 
                    color="#b8b8b8" 
                    mb={2
                  } sx={{ fontSize: '0.9rem', lineHeight: 1.4 }}>
                    {product.description}
                  </Typography>
                  
                  <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
                    <Chip 
                      label={product.category} 
                      size="small" 
                      sx={{ 
                        bgcolor: 'rgba(78, 205, 196, 0.1)',
                        color: '#4ecdc4',
                        fontWeight: 600
                      }} 
                    />
                    <Chip 
                      label={product.platform} 
                      size="small" 
                      sx={{ 
                        bgcolor: 'rgba(255, 193, 7, 0.1)',
                        color: '#ffc107',
                        fontWeight: 600
                      }} 
                    />
                  </Stack>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h5" fontWeight={700} sx={{ color: '#4ecdc4' }}>
                      ₹{product.price}
                    </Typography>
                    <Typography variant="body2" color="#b8b8b8">
                      {product.sales} sales
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="#b8b8b8">
                      by {product.seller}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleBuyProduct(product)}
                      sx={{
                        bgcolor: '#4ecdc4',
                        color: 'white',
                        borderRadius: 2,
                        px: 2,
                        '&:hover': {
                          bgcolor: '#45b7d1'
                        }
                      }}
                    >
                      Buy Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" color="#b8b8b8" mb={2}>
              No products found
            </Typography>
            <Typography color="#888" mb={3}>
              Try adjusting your search criteria or filters
            </Typography>
            <Button
              variant="outlined"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedPlatform('All');
                setSelectedGame('All');
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

        {/* Sell Product FAB */}
        <Fab
          color="primary"
          aria-label="sell"
          onClick={() => setShowSellDialog(true)}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            bgcolor: '#4ecdc4',
            '&:hover': {
              bgcolor: '#45b7d1'
            }
          }}
        >
          <Sell />
        </Fab>

        {/* Dialogs */}
        <SellProduct
          open={showSellDialog}
          onClose={() => setShowSellDialog(false)}
          onSuccess={handleSellSuccess}
        />

        <BuyProductModal
          open={showBuyDialog}
          onClose={() => setShowBuyDialog(false)}
          product={selectedProduct}
        />
      </Container>
    </Box>
  );
};

export default Marketplace;