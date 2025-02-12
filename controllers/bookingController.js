const db = require('../config/db');

exports.bookSeat = async (req, res) => {
    const { train_id } = req.body;
    const userId = req.user.id;

    try {
        const [train] = await db.execute('SELECT available_seats FROM trains WHERE id = ?', [train_id]);
        if (train[0].available_seats <= 0) return res.status(400).json({ message: 'No seats available' });

        await db.execute('UPDATE trains SET available_seats = available_seats - 1 WHERE id = ?', [train_id]);
        const [result] = await db.execute('INSERT INTO bookings (user_id, train_id) VALUES (?, ?)', [userId, train_id]);

        res.status(201).json({ message: 'Seat booked', bookingId: result.insertId });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getBookingDetails = async (req, res) => {
    const { bookingId } = req.params;

    try {
        const [booking] = await db.execute('SELECT * FROM bookings WHERE id = ?', [bookingId]);
        res.json(booking[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
