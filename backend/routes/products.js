const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { Product, User } = require('../models');
const router = express.Router();

// Multer setup for image uploads
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });
  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = decoded;
    next();
  });
};

// Serve uploaded images statically
router.use('/images', express.static(uploadDir));

// Get all products
router.get('/', async (req, res) => {
  try {
    const { category, platform, game, status } = req.query;
    const whereClause = { status: 'available' };
    if (category) whereClause.category = category;
    if (platform) whereClause.platform = platform;
    if (game) whereClause.game = game;
    if (status) whereClause.status = status;
    const products = await Product.findAll({
      where: whereClause,
      include: [{
        model: User,
        as: 'Seller',
        attributes: ['id', 'username', 'name']
      }],
      order: [['createdAt', 'DESC']]
    });
    res.json(products);
  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{
        model: User,
        as: 'Seller',
        attributes: ['id', 'username', 'name', 'phone', 'email']
      }]
    });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Get product error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new product (with image upload)
router.post('/', authenticateToken, upload.single('image'), async (req, res) => {
  try {
    const { name, description, price, category, platform, game, condition } = req.body;
    let image = req.body.image || '';
    if (req.file) {
      image = `/api/products/images/${req.file.filename}`;
    }
    const product = await Product.create({
      name,
      description,
      price,
      category,
      image,
      platform,
      game,
      condition,
      seller_id: req.user.id,
      status: 'available'
    });
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    console.error('Create product error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update product
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    if (product.seller_id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    const { name, description, price, category, image, platform, game, condition, status } = req.body;
    await product.update({
      name: name || product.name,
      description: description || product.description,
      price: price || product.price,
      category: category || product.category,
      image: image || product.image,
      platform: platform || product.platform,
      game: game || product.game,
      condition: condition || product.condition,
      status: status || product.status
    });
    res.json({ message: 'Product updated successfully', product });
  } catch (error) {
    console.error('Update product error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete product
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    if (product.seller_id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    await product.destroy();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Delete product error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's products
router.get('/user/my-products', authenticateToken, async (req, res) => {
  try {
    const products = await Product.findAll({
      where: { seller_id: req.user.id },
      order: [['createdAt', 'DESC']]
    });
    res.json(products);
  } catch (error) {
    console.error('Get user products error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;