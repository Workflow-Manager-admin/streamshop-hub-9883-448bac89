const express = require('express');
const router = express.Router();

// PUBLIC_INTERFACE
router.get('/', (req, res) => {
  /** List products (to be implemented) */
  res.json({ message: 'Products endpoint placeholder.' });
});

// PUBLIC_INTERFACE
router.get('/search', (req, res) => {
  /** Product search endpoint (to be implemented) */
  res.json({ message: 'Product search placeholder.' });
});

module.exports = router;
