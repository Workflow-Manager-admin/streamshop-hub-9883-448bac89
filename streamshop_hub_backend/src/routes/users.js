const express = require('express');
const router = express.Router();

// PUBLIC_INTERFACE
router.post('/login', (req, res) => {
  /** User login endpoint (to be implemented) */
  res.json({ message: 'Login endpoint placeholder.' });
});

// PUBLIC_INTERFACE
router.post('/signup', (req, res) => {
  /** User signup endpoint (to be implemented) */
  res.json({ message: 'Signup endpoint placeholder.' });
});

// PUBLIC_INTERFACE
router.get('/profile', (req, res) => {
  /** User profile endpoint (to be implemented) */
  res.json({ message: 'User profile placeholder.' });
});

module.exports = router;
