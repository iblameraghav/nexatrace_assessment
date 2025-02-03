const express = require('express');
const { getScanHistory, submitURL } = require('../controllers/scanController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

// Only authenticated users can submit URL for scanning
router.post('/submit', authMiddleware, submitURL);

// Users can see only their own scan history
router.get('/history', authMiddleware, getScanHistory);

// Admin can view all users' scan history
router.get('/all-history', authMiddleware, roleMiddleware(['admin']), getScanHistory);

module.exports = router;


