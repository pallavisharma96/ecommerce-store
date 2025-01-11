const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Set up MySQL connection
const db = mysql.createConnection({
    host: 'localhost', // Update with your local MySQL host if necessary
    user: 'root', // MySQL username
    password: '', // MySQL password
    database: 'user_db', // Your database name
});

// Check DB connection
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Endpoint to authenticate user
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Query database to check if credentials are valid
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Database error' });
            return;
        }

        if (results.length > 0) {
            res.status(200).json({ success: true });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
