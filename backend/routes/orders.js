const express = require('express');
const jwt = require('jsonwebtoken');
const { Order, Product, User } = require('../models');
const router = express.Router();

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
};

// Create new order
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { product_id, quantity, payment_method, shipping_address, notes } = req.body;
    const product = await Product.findByPk(product_id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    if (product.status !== 'available') {
      return res.status(400).json({ message: 'Product is not available' });
    }
    if (product.seller_id === req.user.id) {
      return res.status(400).json({ message: 'Cannot buy your own product' });
    }
    const total_amount = product.price * quantity;
    const order = await Order.create({
      buyer_id: req.user.id,
      seller_id: product.seller_id,
      product_id,
      quantity,
      total_amount,
      payment_method,
      shipping_address,
      notes,
      payment_status: 'pending',
      order_status: 'pending'
    });
    await product.update({ status: 'reserved' });
    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's orders (as buyer)
router.get('/my-orders', authenticateToken, async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { buyer_id: req.user.id },
      include: [
        {
          model: Product,
          attributes: ['id', 'name', 'description', 'price', 'category', 'image']
        },
        {
          model: User,
          as: 'Seller',
          attributes: ['id', 'username', 'name']
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    res.json(orders);
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's sales (as seller)
router.get('/my-sales', authenticateToken, async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { seller_id: req.user.id },
      include: [
        {
          model: Product,
          attributes: ['id', 'name', 'description', 'price', 'category', 'image']
        },
        {
          model: User,
          as: 'Buyer',
          attributes: ['id', 'username', 'name']
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    res.json(orders);
  } catch (error) {
    console.error('Get sales error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get order by ID
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ['id', 'name', 'description', 'price', 'category', 'image']
        },
        {
          model: User,
          as: 'Seller',
          attributes: ['id', 'username', 'name', 'phone', 'email']
        },
        {
          model: User,
          as: 'Buyer',
          attributes: ['id', 'username', 'name', 'phone', 'email']
        }
      ]
    });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    if (order.buyer_id !== req.user.id && order.seller_id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    res.json(order);
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update order status (for payment confirmation)
router.put('/:id/status', authenticateToken, async (req, res) => {
  try {
    const { payment_status, order_status, transaction_id } = req.body;
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    if (order.buyer_id !== req.user.id && order.seller_id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    await order.update({
      payment_status: payment_status || order.payment_status,
      order_status: order_status || order.order_status,
      transaction_id: transaction_id || order.transaction_id
    });
    if (payment_status === 'completed' && order_status === 'confirmed') {
      const product = await Product.findByPk(order.product_id);
      if (product) {
        await product.update({ status: 'sold' });
      }
    }
    res.json({ message: 'Order status updated successfully', order });
  } catch (error) {
    console.error('Update order status error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Cancel order
router.put('/:id/cancel', authenticateToken, async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    if (order.buyer_id !== req.user.id && order.seller_id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    if (order.order_status !== 'pending') {
      return res.status(400).json({ message: 'Cannot cancel order that is not pending' });
    }
    await order.update({
      order_status: 'cancelled',
      payment_status: 'failed'
    });
    const product = await Product.findByPk(order.product_id);
    if (product) {
      await product.update({ status: 'available' });
    }
    res.json({ message: 'Order cancelled successfully', order });
  } catch (error) {
    console.error('Cancel order error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;