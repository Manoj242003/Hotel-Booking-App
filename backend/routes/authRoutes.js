const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Make sure to create a User model

// Mock login for simplicity
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // For real applications, validate against a database
  const user = await User.findOne({ email, password });
  if (user) {
    return res.json({ name: user.name });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
