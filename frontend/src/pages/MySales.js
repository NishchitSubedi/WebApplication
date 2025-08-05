import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Card, CardContent, CardMedia, Grid, Button, Paper,
  Container, Stack, Chip, Avatar, IconButton, Dialog, DialogTitle,
  DialogContent, DialogActions, Alert, Badge
} from '@mui/material';
import {
  ShoppingCart, LocalShipping, CheckCircle, Cancel, Receipt,
  Star, LocalOffer, Gamepad, Security, Diamond, MoreVert,
  Payment, Schedule, Done, Error, TrendingUp, AttachMoney
} from '@mui/icons-material';
import axios from 'axios';

const MySales = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedSale, setSelectedSale] = useState(null);
  const [showSaleDialog, setShowSaleDialog] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock data for demonstration
  useEffect(() => {
    const mockSales = [
      {
        id: 1,
        product: {
          name: "Fortnite Battle Pass Season 5",
          image: "https://via.placeholder.com/300x200/7c3aed/ffffff?text=Fortnite+BP",
          price: 950
        },
        buyer: "Gamer123",
        saleDate: "2024-01-15",
        status: "completed",
        totalAmount: 950,
        paymentMethod: "Khalti",
        transactionId: "TXN123456789",
        deliveryDate: "2024-01-15",
        commission: 95,
        earnings: 855
      },
      {
        id: 2,
        product: {
          name: "Valorant Premium Collection",
          image: "https://via.placeholder.com/300x200/f59e0b/ffffff?text=Valorant+Skin",
          price: 1800
        },
        buyer: "SkinHunter",
        saleDate: "2024-01-10",
        status: "processing",
        totalAmount: 1800,
        paymentMethod: "eSewa",
        transactionId: "TXN987654321",
        deliveryDate: null,
        commission: 180,
        earnings: 1620
      },
      {
        id: 3,
        product: {
          name: "PUBG Mobile UC Package",
          image: "https://via.placeholder.com/300x200/10b981/ffffff?text=PUBG+UC",
          price: 800
        },
        buyer: "MobileGamer",
        saleDate: "2024-01-05",
        status: "cancelled",
        totalAmount: 800,
        paymentMethod: "Khalti",
        transactionId: "TXN456789123",
        deliveryDate: null,
        commission: 0,
        earnings: 0
      }
    ];
    setSales(mockSales);
    setLoading(false);
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle color="success" />;
      case 'processing': return <Schedule color="warning" />;
      case 'cancelled': return <Cancel color="error" />;
      case 'pending': return <Payment color="info" />;
      default: return <Receipt />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'success';
      case 'processing': return 'warning';
      case 'cancelled': return 'error';
      case 'pending': return 'info';
      default: return 'default';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Delivered';
      case 'processing': return 'Processing';
      case 'cancelled': return 'Cancelled';
      case 'pending': return 'Pending';
      default: return status;
    }
  };

  const filteredSales = sales.filter(sale => {
    if (filterStatus === 'all') return true;
    return sale.status === filterStatus;
  });

  const totalEarnings = sales
    .filter(sale => sale.status === 'completed')
    .reduce((sum, sale) => sum + sale.earnings, 0);

  const totalSales = sales
    .filter(sale => sale.status === 'completed')
    .reduce((sum, sale) => sum + sale.totalAmount, 0);

  const handleViewSale = (sale) => {
    setSelectedSale(sale);
    setShowSaleDialog(true);
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
            My Sales
          </Typography>
          <Typography color="text.secondary" variant="h6" mb={4}>
            Track your sales performance and earnings
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
                {sales.length}
              </Typography>
              <Typography color="text.secondary">
                Total Sales
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
                ₹{totalEarnings}
              </Typography>
              <Typography color="text.secondary">
                Total Earnings
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
                ₹{totalSales}
              </Typography>
              <Typography color="text.secondary">
                Revenue
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
              <Typography variant="h4" fontWeight={700} color="warning.main">
                {sales.filter(s => s.status === 'processing').length}
              </Typography>
              <Typography color="text.secondary">
                Pending
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Filters */}
        <Paper elevation={4} sx={{
          p: 3,
          mb: 4,
          borderRadius: 4,
          background: 'rgba(36,37,46,0.95)',
          backdropFilter: 'blur(10px)'
        }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Filter Sales
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Chip
                  label="All Sales"
                  onClick={() => setFilterStatus('all')}
                  color={filterStatus === 'all' ? 'primary' : 'default'}
                  variant={filterStatus === 'all' ? 'filled' : 'outlined'}
                />
                <Chip
                  label="Completed"
                  onClick={() => setFilterStatus('completed')}
                  color={filterStatus === 'completed' ? 'success' : 'default'}
                  variant={filterStatus === 'completed' ? 'filled' : 'outlined'}
                />
                <Chip
                  label="Processing"
                  onClick={() => setFilterStatus('processing')}
                  color={filterStatus === 'processing' ? 'warning' : 'default'}
                  variant={filterStatus === 'processing' ? 'filled' : 'outlined'}
                />
                <Chip
                  label="Cancelled"
                  onClick={() => setFilterStatus('cancelled')}
                  color={filterStatus === 'cancelled' ? 'error' : 'default'}
                  variant={filterStatus === 'cancelled' ? 'filled' : 'outlined'}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Sales Summary
              </Typography>
              <Typography color="text.secondary">
                Showing {filteredSales.length} of {sales.length} sales
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Sales Grid */}
        <Grid container spacing={3}>
          {filteredSales.map((sale) => (
            <Grid item xs={12} md={6} key={sale.id}>
              <Card sx={{
                borderRadius: 4,
                background: 'rgba(36,37,46,0.95)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.3)'
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ width: 48, height: 48, mr: 2 }}>
                      {sale.buyer.charAt(0)}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" fontWeight={700}>
                        {sale.product.name}
                      </Typography>
                      <Typography color="text.secondary" fontSize={14}>
                        Sold to {sale.buyer}
                      </Typography>
                    </Box>
                    <Chip
                      icon={getStatusIcon(sale.status)}
                      label={getStatusText(sale.status)}
                      color={getStatusColor(sale.status)}
                      size="small"
                      sx={{ fontWeight: 700 }}
                    />
                  </Box>
                  
                  <CardMedia
                    component="img"
                    height="120"
                    image={sale.product.image}
                    alt={sale.product.name}
                    sx={{ borderRadius: 2, mb: 2 }}
                  />
                  
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Sale Date:</Typography>
                      <Typography fontWeight={600}>
                        {new Date(sale.saleDate).toLocaleDateString()}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Amount:</Typography>
                      <Typography fontWeight={700} color="primary">
                        ₹{sale.totalAmount}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Earnings:</Typography>
                      <Typography fontWeight={700} color="success.main">
                        ₹{sale.earnings}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Commission:</Typography>
                      <Typography fontWeight={600} color="error.main">
                        -₹{sale.commission}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Payment:</Typography>
                      <Typography fontWeight={600}>
                        {sale.paymentMethod}
                      </Typography>
                    </Box>
                    {sale.deliveryDate && (
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography color="text.secondary">Delivered:</Typography>
                        <Typography fontWeight={600}>
                          {new Date(sale.deliveryDate).toLocaleDateString()}
                        </Typography>
                      </Box>
                    )}
                  </Stack>
                  
                  <Stack direction="row" spacing={2} mt={3}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<Receipt />}
                      onClick={() => handleViewSale(sale)}
                      sx={{ borderRadius: 2, flex: 1 }}
                    >
                      View Details
                    </Button>
                    {sale.status === 'processing' && (
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<CheckCircle />}
                        sx={{ borderRadius: 2, flex: 1 }}
                      >
                        Mark Delivered
                      </Button>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredSales.length === 0 && (
          <Box textAlign="center" py={8}>
            <Typography variant="h5" color="text.secondary" mb={2}>
              No sales found
            </Typography>
            <Typography color="text.secondary" mb={3}>
              {filterStatus === 'all' 
                ? 'You haven\'t made any sales yet.' 
                : `No ${filterStatus} sales found.`
              }
            </Typography>
            <Button
              variant="contained"
              startIcon={<ShoppingCart />}
              href="/my-products"
              sx={{
                borderRadius: 3,
                fontWeight: 700,
                background: 'linear-gradient(45deg, #7c3aed 30%, #06b6d4 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #6d28d9 30%, #0891b2 90%)'
                }
              }}
            >
              Manage Products
            </Button>
          </Box>
        )}
      </Container>

      {/* Sale Details Dialog */}
      <Dialog
        open={showSaleDialog}
        onClose={() => setShowSaleDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{
          background: 'linear-gradient(90deg,#7c3aed,#06b6d4)',
          color: 'white',
          fontWeight: 700
        }}>
          Sale Details
        </DialogTitle>
        <DialogContent sx={{ pt: 3 }}>
          {selectedSale && (
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" fontWeight={600} mb={2}>
                    Product Information
                  </Typography>
                  <Card sx={{ p: 2, mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CardMedia
                        component="img"
                        width="80"
                        height="60"
                        image={selectedSale.product.image}
                        alt={selectedSale.product.name}
                        sx={{ borderRadius: 1, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6" fontWeight={700}>
                          {selectedSale.product.name}
                        </Typography>
                        <Typography color="text.secondary">
                          ₹{selectedSale.product.price}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                  
                  <Typography variant="h6" fontWeight={600} mb={2}>
                    Financial Details
                  </Typography>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Sale Amount:</Typography>
                      <Typography fontWeight={700} color="primary">
                        ₹{selectedSale.totalAmount}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Commission:</Typography>
                      <Typography fontWeight={600} color="error.main">
                        -₹{selectedSale.commission}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Your Earnings:</Typography>
                      <Typography fontWeight={700} color="success.main">
                        ₹{selectedSale.earnings}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" fontWeight={600} mb={2}>
                    Buyer Information
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', p: 2, bgcolor: 'rgba(124,58,237,0.1)', borderRadius: 2, mb: 3 }}>
                    <Avatar sx={{ mr: 2 }}>
                      {selectedSale.buyer.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography fontWeight={700}>
                        {selectedSale.buyer}
                      </Typography>
                      <Typography color="text.secondary" fontSize={14}>
                        Verified Buyer
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography variant="h6" fontWeight={600} mb={2}>
                    Transaction Details
                  </Typography>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Transaction ID:</Typography>
                      <Typography fontWeight={600} fontFamily="monospace">
                        {selectedSale.transactionId}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Payment Method:</Typography>
                      <Typography fontWeight={600}>
                        {selectedSale.paymentMethod}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Sale Date:</Typography>
                      <Typography fontWeight={600}>
                        {new Date(selectedSale.saleDate).toLocaleDateString()}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Status:</Typography>
                      <Chip
                        label={getStatusText(selectedSale.status)}
                        color={getStatusColor(selectedSale.status)}
                        size="small"
                      />
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowSaleDialog(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MySales;