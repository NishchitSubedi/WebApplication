import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem,
  Stack, Alert, Paper
} from '@mui/material';
import axios from 'axios';

const SellProduct = ({ onClose }) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    category: 'battle-pass',
    platform: '',
    game: '',
    condition: 'new'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      // Mock success for now
      setSuccess('Product listed successfully!');
      setTimeout(() => {
        if (onClose) onClose();
      }, 1500);
    } catch (err) {
      setError('Failed to list product');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <Typography variant="h6" fontWeight={700} sx={{ color: '#7c3aed' }}>
          Product Details
        </Typography>
        
        <TextField
          fullWidth
          label="Product Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
        />
        
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
          multiline
          rows={3}
          required
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
        />
        
        <TextField
          fullWidth
          label="Price (₹)"
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          required
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
        />
        
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            value={form.category}
            onChange={handleChange}
            sx={{ borderRadius: 3 }}
          >
            <MenuItem value="battle-pass">Battle Pass</MenuItem>
            <MenuItem value="premium">Premium Items</MenuItem>
            <MenuItem value="currency">Gaming Currency</MenuItem>
            <MenuItem value="skins">Skins & Cosmetics</MenuItem>
          </Select>
        </FormControl>
        
        <TextField
          fullWidth
          label="Platform"
          name="platform"
          value={form.platform}
          onChange={handleChange}
          placeholder="e.g., PC, Mobile, PS4"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
        />
        
        <TextField
          fullWidth
          label="Game Name"
          name="game"
          value={form.game}
          onChange={handleChange}
          placeholder="e.g., Fortnite, Valorant"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
        />
        
        <FormControl fullWidth>
          <InputLabel>Condition</InputLabel>
          <Select
            name="condition"
            value={form.condition}
            onChange={handleChange}
            sx={{ borderRadius: 3 }}
          >
            <MenuItem value="new">New</MenuItem>
            <MenuItem value="excellent">Excellent</MenuItem>
            <MenuItem value="good">Good</MenuItem>
            <MenuItem value="used">Used</MenuItem>
          </Select>
        </FormControl>
        
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
        
        <Stack direction="row" spacing={2}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              borderRadius: 3,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #7c3aed 30%, #06b6d4 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #6d28d9 30%, #0891b2 90%)'
              }
            }}
          >
            List Product
          </Button>
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{ borderRadius: 3, fontWeight: 700 }}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SellProduct;