const express = require('express');
const { addTrain, getTrains } = require('../controllers/trainController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/add', authMiddleware, adminMiddleware, addTrain);
router.get('/search', getTrains);

module.exports = router;
