const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('../controllers/auth');

const { protect } = require('../middleware/auth');

// Register a new user
router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;
