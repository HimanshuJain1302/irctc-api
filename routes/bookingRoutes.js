const express = require('express');
const { bookSeat, getBookingDetails } = require('../controllers/bookingController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/book', authMiddleware, bookSeat);
router.get('/:bookingId', authMiddleware, getBookingDetails);

module.exports = router;
