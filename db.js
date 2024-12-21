const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: 'database-1.c9i68yyymizm.us-east-1.rds.amazonaws.com',
    user: 'admin',       // Replace with your username
    password: 'honey5566', // Replace with your password
    database: 'fee_payment', // Replace with your database name
});

// Export a promise-based pool
const db = pool.promise();

module.exports = db;
