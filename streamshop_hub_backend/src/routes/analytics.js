const express = require('express');
const router = express.Router();

// PUBLIC_INTERFACE
router.get('/usage', (req, res) => {
  /** Analytics endpoint (to be implemented) */
  res.json({ message: 'Analytics usage stats placeholder.' });
});

module.exports = router;
