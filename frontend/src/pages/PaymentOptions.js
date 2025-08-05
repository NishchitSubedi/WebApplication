import React, { useState } from 'react';
import {
  Box, Typography, Card, CardContent, Grid, Button, Paper,
  Container, Stack, Chip, Avatar, Divider, Alert
} from '@mui/material';
import {
  Payment, CreditCard, AccountBalance, QrCode,
  Security, Speed, CheckCircle, Star
} from '@mui/icons-material';

const PaymentOptions = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    {
      id: 'khalti',
      name: 'Khalti',
      description: 'Fast and secure digital wallet',
      icon: '💳',
      features: ['Instant Transfer', '24/7 Support', 'Secure Transactions'],
      color: '#5B21B6',
      popular: true
    },
    {
      id: 'esewa',
      name: 'eSewa',
      description: 'Nepal\'s leading digital payment platform',
      icon: '📱',
      features: ['Wide Acceptance', 'Easy to Use', 'Reliable Service'],
      color: '#059669',
      popular: false
    },
    {
      id: 'credit-card',
      name: 'Credit/Debit Card',
      description: 'International payment cards accepted',
      icon: '💳',
      features: ['Global Acceptance', 'Rewards Points', 'Fraud Protection'],
      color: '#DC2626',
      popular: false
    },
    {
      id: 'bank-transfer',
      name: 'Bank Transfer',
      description: 'Direct bank account transfer',
      icon: '🏦',
      features: ['No Extra Fees', 'Direct Transfer', 'Bank Security'],
      color: '#1E40AF',
      popular: false
    }
  ];

  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
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
            Payment Options
          </Typography>
          <Typography color="text.secondary" variant="h6" mb={4}>
            Choose your preferred payment method for secure transactions
          </Typography>
        </Box>

        {/* Payment Methods Grid */}
        <Grid container spacing={4} mb={6}>
          {paymentMethods.map((method) => (
            <Grid item xs={12} md={6} lg={3} key={method.id}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  background: 'rgba(36,37,46,0.95)',
                  backdropFilter: 'blur(10px)',
                  border: selectedMethod?.id === method.id ? '2px solid #7c3aed' : '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    borderColor: '#7c3aed'
                  }
                }}
                onClick={() => handleSelectMethod(method)}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  {method.popular && (
                    <Chip
                      icon={<Star />}
                      label="Most Popular"
                      color="secondary"
                      size="small"
                      sx={{ mb: 2, fontWeight: 700 }}
                    />
                  )}
                  
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 2,
                      bgcolor: method.color,
                      fontSize: 32
                    }}
                  >
                    {method.icon}
                  </Avatar>
                  
                  <Typography variant="h5" fontWeight={700} mb={1}>
                    {method.name}
                  </Typography>
                  
                  <Typography color="text.secondary" mb={3}>
                    {method.description}
                  </Typography>
                  
                  <Stack spacing={1} mb={3}>
                    {method.features.map((feature, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircle sx={{ fontSize: 16, color: '#10b981', mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                  
                  <Button
                    variant={selectedMethod?.id === method.id ? "contained" : "outlined"}
                    fullWidth
                    sx={{
                      borderRadius: 3,
                      fontWeight: 700,
                      ...(selectedMethod?.id === method.id && {
                        background: `linear-gradient(45deg, ${method.color} 30%, ${method.color}80 90%)`,
                        '&:hover': {
                          background: `linear-gradient(45deg, ${method.color}80 30%, ${method.color} 90%)`
                        }
                      })
                    }}
                  >
                    {selectedMethod?.id === method.id ? 'Selected' : 'Select'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Selected Method Details */}
        {selectedMethod && (
          <Paper elevation={4} sx={{
            p: 4,
            borderRadius: 4,
            background: 'rgba(36,37,46,0.95)',
            backdropFilter: 'blur(10px)',
            mb: 4
          }}>
            <Typography variant="h4" fontWeight={700} mb={3} sx={{ color: '#7c3aed' }}>
              {selectedMethod.name} Payment Details
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  How to Pay with {selectedMethod.name}
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ width: 32, height: 32, mr: 2, bgcolor: selectedMethod.color }}>
                      1
                    </Avatar>
                    <Typography>Enter your payment details</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ width: 32, height: 32, mr: 2, bgcolor: selectedMethod.color }}>
                      2
                    </Avatar>
                    <Typography>Verify the transaction amount</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ width: 32, height: 32, mr: 2, bgcolor: selectedMethod.color }}>
                      3
                    </Avatar>
                    <Typography>Complete the payment securely</Typography>
                  </Box>
                </Stack>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  Security Features
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Security sx={{ mr: 2, color: '#10b981' }} />
                    <Typography>End-to-end encryption</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Speed sx={{ mr: 2, color: '#10b981' }} />
                    <Typography>Instant transaction processing</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Payment sx={{ mr: 2, color: '#10b981' }} />
                    <Typography>Secure payment gateway</Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        )}

        {/* Payment Security Info */}
        <Paper elevation={4} sx={{
          p: 4,
          borderRadius: 4,
          background: 'rgba(36,37,46,0.95)',
          backdropFilter: 'blur(10px)'
        }}>
          <Typography variant="h5" fontWeight={700} mb={3} sx={{ color: '#7c3aed' }}>
            Payment Security
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Avatar sx={{ width: 64, height: 64, mx: 'auto', mb: 2, bgcolor: '#10b981' }}>
                  <Security sx={{ fontSize: 32 }} />
                </Avatar>
                <Typography variant="h6" fontWeight={600} mb={1}>
                  Secure Transactions
                </Typography>
                <Typography color="text.secondary">
                  All payments are encrypted and processed through secure payment gateways
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Avatar sx={{ width: 64, height: 64, mx: 'auto', mb: 2, bgcolor: '#7c3aed' }}>
                  <QrCode sx={{ fontSize: 32 }} />
                </Avatar>
                <Typography variant="h6" fontWeight={600} mb={1}>
                  Multiple Options
                </Typography>
                <Typography color="text.secondary">
                  Choose from various payment methods that suit your preferences
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Avatar sx={{ width: 64, height: 64, mx: 'auto', mb: 2, bgcolor: '#06b6d4' }}>
                  <CheckCircle sx={{ fontSize: 32 }} />
                </Avatar>
                <Typography variant="h6" fontWeight={600} mb={1}>
                  Instant Confirmation
                </Typography>
                <Typography color="text.secondary">
                  Receive immediate confirmation of your payment and order status
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Action Buttons */}
        <Box textAlign="center" mt={4}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              disabled={!selectedMethod}
              sx={{
                borderRadius: 3,
                py: 1.5,
                px: 4,
                fontWeight: 700,
                background: 'linear-gradient(45deg, #7c3aed 30%, #06b6d4 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #6d28d9 30%, #0891b2 90%)'
                }
              }}
            >
              Proceed to Payment
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ borderRadius: 3, py: 1.5, px: 4, fontWeight: 700 }}
            >
              Back to Cart
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default PaymentOptions;