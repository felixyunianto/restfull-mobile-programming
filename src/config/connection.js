const mysql = require('mysql');

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE
});

db.connect((err) => {
    if(err) throw err;
    console.log('Connection is successfully');
})

module.exports = db