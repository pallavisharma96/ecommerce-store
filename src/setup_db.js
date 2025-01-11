const mysql = require('mysql2');
const fs = require('fs');

// Set up MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Lucky@108', // Password is set
});

// Read SQL file
fs.readFile('src/user_db.sql', 'utf8', (err, sql) => {
    if (err) {
        console.error('Error reading SQL file:', err);
        return;
    }

    // Connect to MySQL and execute SQL commands
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to database:', err);
            return;
        }
        console.log('Connected to the database');

        db.query(sql, (err) => {
            if (err) {
                console.error('Error executing SQL commands:', err);
            } else {
                console.log('Database setup completed successfully');
            }
            db.end();
        });
    });
});
