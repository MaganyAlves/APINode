import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '714625calu',
    database: 'cfpappbd'
});
connection.connect(function (err) {
    if (err) return console.log(err);
    console.log('conectou!');
});
export default connection;