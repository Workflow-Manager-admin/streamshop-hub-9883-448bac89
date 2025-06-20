//
// StreamShop Hub - Express.js Backend Entry Point
//

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Route imports (feature modules)
const userRoutes = require('./routes/users');
const videoRoutes = require('./routes/videos');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const analyticsRoutes = require('./routes/analytics');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Health check endpoint
// PUBLIC_INTERFACE
app.get('/api/health', (req, res) => {
  /** Health check endpoint for monitoring backend status. */
  res.json({ message: 'Express.js server is up!' });
});

// App feature routes
app.use('/api/users', userRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/analytics', analyticsRoutes);

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
