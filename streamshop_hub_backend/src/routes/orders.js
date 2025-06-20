const express = require('express');
const router = express.Router();

// PUBLIC_INTERFACE
router.post('/subscribe', (req, res) => {
  /** Subscribe endpoint (to be implemented) */
  res.json({ message: 'Subscription endpoint placeholder.' });
});

// PUBLIC_INTERFACE
router.post('/purchase', (req, res) => {
  /** Purchase endpoint (to be implemented) */
  res.json({ message: 'Purchase endpoint placeholder.' });
});

module.exports = router;
