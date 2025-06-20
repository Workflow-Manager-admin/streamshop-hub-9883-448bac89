const express = require('express');
const router = express.Router();

// PUBLIC_INTERFACE
router.get('/', (req, res) => {
  /** List available videos (to be implemented) */
  res.json({ message: 'Videos endpoint placeholder.' });
});

// PUBLIC_INTERFACE
router.get('/:id', (req, res) => {
  /** Stream a specific video (to be implemented) */
  res.json({ message: `Streaming video placeholder for id ${req.params.id}` });
});

module.exports = router;
