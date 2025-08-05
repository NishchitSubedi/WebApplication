import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Card, CardContent, CardMedia, Grid, Button, Paper,
  Container, Stack, Chip, Avatar, IconButton, Dialog, DialogTitle,
  DialogContent, DialogActions, Alert, Badge
} from '@mui/material';
import {
  ShoppingCart, LocalShipping, CheckCircle, Cancel, Receipt,
  Star, LocalOffer, Gamepad, Security, Diamond, MoreVert,
  Payment, Schedule, Done, Error
} from '@mui/icons-material';
import axios from 'axios';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderDialog, setShowOrderDialog] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock data for demonstration
  useEffect(() => {
    const mockOrders = [
      {
        id: 1,
        product: {
          name: "Fortnite Battle Pass Season 5",
          image: "https://via.placeholder.com/300x200/7c3aed/ffffff?text=Fortnite+BP",
          price: 950
        },
        seller: "GamingPro",
        orderDate: "2024-01-15",
        status: "completed",
        totalAmount: 950,
        paymentMethod: "Khalti",
        transactionId: "TXN123456789",
        deliveryDate: "2024-01-15"
      },
      {
        id: 2,
        product: {
          name: "Valorant Premium Collection",
          image: "https://via.placeholder.com/300x200/f59e0b/ffffff?text=Valorant+Skin",
          price: 1800
        },
        seller: "SkinMaster",
        orderDate: "2024-01-10",
        status: "processing",
        totalAmount: 1800,
        paymentMethod: "eSewa",
        transactionId: "TXN987654321",
        deliveryDate: null
      },
      {
        id: 3,
        product: {
          name: "PUBG Mobile UC Package",
          image: "https://via.placeholder.com/300x200/10b981/ffffff?text=PUBG+UC",
          price: 800
        },
        seller: "MobileGaming",
        orderDate: "2024-01-05",
        status: "cancelled",
        totalAmount: 800,
        paymentMethod: "Khalti",
        transactionId: "TXN456789123",
        deliveryDate: null
      }
    ];
    setOrders(mockOrders);
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

  const filteredOrders = orders.filter(order => {
    if (filterStatus === 'all') return true;
    return order.status === filterStatus;
  });

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setShowOrderDialog(true);
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
            My Orders
          </Typography>
          <Typography color="text.secondary" variant="h6" mb={4}>
            Track your gaming purchases and order history
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
                {orders.length}
              </Typography>
              <Typography color="text.secondary">
                Total Orders
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
                {orders.filter(o => o.status === 'completed').length}
              </Typography>
              <Typography color="text.secondary">
                Completed
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
                {orders.filter(o => o.status === 'processing').length}
              </Typography>
              <Typography color="text.secondary">
                Processing
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
                ₹{orders.reduce((sum, o) => sum + o.totalAmount, 0)}
              </Typography>
              <Typography color="text.secondary">
                Total Spent
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
                Filter Orders
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Chip
                  label="All Orders"
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
                Order Summary
              </Typography>
              <Typography color="text.secondary">
                Showing {filteredOrders.length} of {orders.length} orders
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Orders Grid */}
        <Grid container spacing={3}>
          {filteredOrders.map((order) => (
            <Grid item xs={12} md={6} key={order.id}>
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
                      {order.seller.charAt(0)}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" fontWeight={700}>
                        {order.product.name}
                      </Typography>
                      <Typography color="text.secondary" fontSize={14}>
                        Sold by {order.seller}
                      </Typography>
                    </Box>
                    <Chip
                      icon={getStatusIcon(order.status)}
                      label={getStatusText(order.status)}
                      color={getStatusColor(order.status)}
                      size="small"
                      sx={{ fontWeight: 700 }}
                    />
                  </Box>
                  
                  <CardMedia
                    component="img"
                    height="120"
                    image={order.product.image}
                    alt={order.product.name}
                    sx={{ borderRadius: 2, mb: 2 }}
                  />
                  
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Order Date:</Typography>
                      <Typography fontWeight={600}>
                        {new Date(order.orderDate).toLocaleDateString()}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Amount:</Typography>
                      <Typography fontWeight={700} color="primary">
                        ₹{order.totalAmount}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Payment:</Typography>
                      <Typography fontWeight={600}>
                        {order.paymentMethod}
                      </Typography>
                    </Box>
                    {order.deliveryDate && (
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography color="text.secondary">Delivered:</Typography>
                        <Typography fontWeight={600}>
                          {new Date(order.deliveryDate).toLocaleDateString()}
                        </Typography>
                      </Box>
                    )}
                  </Stack>
                  
                  <Stack direction="row" spacing={2} mt={3}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<Receipt />}
                      onClick={() => handleViewOrder(order)}
                      sx={{ borderRadius: 2, flex: 1 }}
                    >
                      View Details
                    </Button>
                    {order.status === 'completed' && (
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<Star />}
                        sx={{ borderRadius: 2, flex: 1 }}
                      >
                        Rate
                      </Button>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredOrders.length === 0 && (
          <Box textAlign="center" py={8}>
            <Typography variant="h5" color="text.secondary" mb={2}>
              No orders found
            </Typography>
            <Typography color="text.secondary" mb={3}>
              {filterStatus === 'all' 
                ? 'You haven\'t placed any orders yet.' 
                : `No ${filterStatus} orders found.`
              }
            </Typography>
            <Button
              variant="contained"
              startIcon={<ShoppingCart />}
              href="/marketplace"
              sx={{
                borderRadius: 3,
                fontWeight: 700,
                background: 'linear-gradient(45deg, #7c3aed 30%, #06b6d4 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #6d28d9 30%, #0891b2 90%)'
                }
              }}
            >
              Browse Marketplace
            </Button>
          </Box>
        )}
      </Container>

      {/* Order Details Dialog */}
      <Dialog
        open={showOrderDialog}
        onClose={() => setShowOrderDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{
          background: 'linear-gradient(90deg,#7c3aed,#06b6d4)',
          color: 'white',
          fontWeight: 700
        }}>
          Order Details
        </DialogTitle>
        <DialogContent sx={{ pt: 3 }}>
          {selectedOrder && (
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
                        image={selectedOrder.product.image}
                        alt={selectedOrder.product.name}
                        sx={{ borderRadius: 1, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6" fontWeight={700}>
                          {selectedOrder.product.name}
                        </Typography>
                        <Typography color="text.secondary">
                          ₹{selectedOrder.product.price}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                  
                  <Typography variant="h6" fontWeight={600} mb={2}>
                    Order Timeline
                  </Typography>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="h6">Order Placed</Typography>
                      <Typography color="text.secondary">
                        {new Date(selectedOrder.orderDate).toLocaleString()}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="h6">Processing</Typography>
                      <Typography color="text.secondary">
                        Payment confirmed, preparing delivery
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="h6">Delivered</Typography>
                      <Typography color="text.secondary">
                        {selectedOrder.deliveryDate 
                          ? new Date(selectedOrder.deliveryDate).toLocaleString()
                          : 'Pending delivery'
                        }
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" fontWeight={600} mb={2}>
                    Payment Details
                  </Typography>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Transaction ID:</Typography>
                      <Typography fontWeight={600} fontFamily="monospace">
                        {selectedOrder.transactionId}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Payment Method:</Typography>
                      <Typography fontWeight={600}>
                        {selectedOrder.paymentMethod}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Total Amount:</Typography>
                      <Typography fontWeight={700} color="primary">
                        ₹{selectedOrder.totalAmount}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">Status:</Typography>
                      <Chip
                        label={getStatusText(selectedOrder.status)}
                        color={getStatusColor(selectedOrder.status)}
                        size="small"
                      />
                    </Box>
                  </Stack>
                  
                  <Typography variant="h6" fontWeight={600} mb={2} mt={4}>
                    Seller Information
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', p: 2, bgcolor: 'rgba(124,58,237,0.1)', borderRadius: 2 }}>
                    <Avatar sx={{ mr: 2 }}>
                      {selectedOrder.seller.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography fontWeight={700}>
                        {selectedOrder.seller}
                      </Typography>
                      <Typography color="text.secondary" fontSize={14}>
                        Verified Seller
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowOrderDialog(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MyOrders;