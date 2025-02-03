const express = require('express');
const { submitText, getTextHistory } = require('../controllers/textController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

// Only authenticated users can submit text for grammar checking
router.post('/submit', authMiddleware, submitText);

// Users can see only their own text history
router.get('/history', authMiddleware, getTextHistory);

// Admin can view all users' text submissions
router.get('/all-history', authMiddleware, roleMiddleware(['admin']), getTextHistory);

module.exports = router;



