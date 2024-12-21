const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3001;

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(cors());            // Enable CORS

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to Express API!');
});

const pool = require('./db');

app.post('/addtrainer', async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO trainers (name) VALUES (?)',
            [name]
        );

        // Get the last inserted trainer using LAST_INSERT_ID()
        const trainerId = result.insertId; // This is specific to MySQL
        const [trainer] = await pool.query('SELECT * FROM trainers WHERE trainer_id = ?', [trainerId]);

        res.status(201).json(trainer[0]); // Return the inserted trainer
    } catch (error) {
        console.error('Database query error:', error.message);
        res.status(500).json({ error: 'Database error' });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
