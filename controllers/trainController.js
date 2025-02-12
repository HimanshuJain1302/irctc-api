const db = require('../config/db');

exports.addTrain = async (req, res) => {
    const { train_name, source, destination, total_seats } = req.body;

    try {
        await db.execute('INSERT INTO trains (train_name, source, destination, total_seats, available_seats) VALUES (?, ?, ?, ?, ?)', 
        [train_name, source, destination, total_seats, total_seats]);

        res.status(201).json({ message: 'Train added successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getTrains = async (req, res) => {
    const { source, destination } = req.query;

    try {
        const [trains] = await db.execute('SELECT * FROM trains WHERE source = ? AND destination = ?', [source, destination]);
        res.json(trains);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
