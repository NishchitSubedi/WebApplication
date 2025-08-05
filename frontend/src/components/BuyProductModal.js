import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem,
  Stack, Alert, Dialog, DialogTitle, DialogContent, DialogActions, Card, CardContent,
  CardMedia, Chip
} from '@mui/material';
import { ShoppingCart, Payment } from '@mui/icons-material';
import axios from 'axios';

const BuyProductModal = ({ open, product, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState('khalti');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!product) return null;

  const handleOrder = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      // Mock success for now
      setSuccess('Order placed successfully!');
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err) {
      setError('Failed to place order');
    }
  };

  const totalAmount = product.price * quantity;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{
        background: 'linear-gradient(90deg,#7c3aed,#06b6d4)',
        color: 'white',
        fontWeight: 700
      }}>
        <ShoppingCart sx={{ mr: 1 }} />
        Purchase {product.name}
      </DialogTitle>
      
      <DialogContent sx={{ pt: 3 }}>
        <Stack spacing={3}>
          {/* Product Info */}
          <Card sx={{ p: 2, background: 'rgba(36,37,46,0.95)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CardMedia
                component="img"
                width="80"
                height="60"
                image={product.image}
                alt={product.name}
                sx={{ borderRadius: 1, mr: 2 }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight={700}>
                  {product.name}
                </Typography>
                <Typography color="text.secondary" fontSize={14}>
                  {product.description}
                </Typography>
                <Typography variant="h5" fontWeight={700} color="primary" mt={1}>
                  ₹{product.price}
                </Typography>
              </Box>
            </Box>
          </Card>

          {/* Order Details */}
          <Typography variant="h6" fontWeight={700} sx={{ color: '#7c3aed' }}>
            Order Details
          </Typography>
          
          <TextField
            fullWidth
            label="Quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            inputProps={{ min: 1, max: 10 }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
          />
          
          <FormControl fullWidth>
            <InputLabel>Payment Method</InputLabel>
            <Select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              sx={{ borderRadius: 3 }}
            >
              <MenuItem value="khalti">Khalti</MenuItem>
              <MenuItem value="esewa">eSewa</MenuItem>
              <MenuItem value="credit-card">Credit/Debit Card</MenuItem>
            </Select>
          </FormControl>

          {/* Total */}
          <Box sx={{ 
            p: 2, 
            bgcolor: 'rgba(124,58,237,0.1)', 
            borderRadius: 2,
            border: '1px solid rgba(124,58,237,0.3)'
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={600}>
                Total Amount:
              </Typography>
              <Typography variant="h5" fontWeight={700} color="primary">
                ₹{totalAmount}
              </Typography>
            </Box>
          </Box>

          {error && (
            <Alert severity="error" sx={{ borderRadius: 2 }}>
              {error}
            </Alert>
          )}
          
          {success && (
            <Alert severity="success" sx={{ borderRadius: 2 }}>
              {success}
            </Alert>
          )}
        </Stack>
      </DialogContent>
      
      <DialogActions sx={{ p: 3 }}>
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{ borderRadius: 3, fontWeight: 700 }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleOrder}
          startIcon={<Payment />}
          sx={{
            borderRadius: 3,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #7c3aed 30%, #06b6d4 90%)',
            '&:hover': {
              background: 'linear-gradient(45deg, #6d28d9 30%, #0891b2 90%)'
            }
          }}
        >
          Confirm Purchase
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BuyProductModal;