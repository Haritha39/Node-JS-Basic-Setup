const mysql = require('mysql');
// Connect mysql server and database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database:"nodetraining",
    multipleStatements: true
});
connection.connect((err) => {
    if (!err) {
        console.log("Connection Established");
    } else {
        console.log(err);
    }
});
module.exports = connection;
// let query = "";
// Create Database
// query = "CREATE DATABASE nodetraining"
// connection.query(query, (err, result) => {
//     if (!err) {
//         console.log("Successfully Created Database");
//     } else {
//         console.log(err);
//     }
// });

// Drop Database
// query = "DROP DATABASE nodetraining"
// connection.query(query, (err, result) => {
//     if (!err) {
//         console.log("Successfully Deleted Database");
//     } else {
//         console.log(err);
//     }
// })
// Create Table
// query = `
//     CREATE TABLE users(
//         id INT(11) NOT NULL AUTO_INCREMENT,
//         email VARCHAR(100) NOT NULL,
//         password VARCHAR(100) NOT NULL,
//         role VARCHAR(100) DEFAULT 'user',
//         PRIMARY KEY (id),
//         UNIQUE (email)
//     );
//     CREATE TABLE enrolls(
//         id INT(11) REFERENCES users(id),
//         FOREIGN KEY (id) REFERENCES users(id)
//     );
    
//     `;
// connection.query(query, (err, result) => {
//     if (!err) {
//         console.log("Successfully Created Tables");
//     } else {
//         console.log(err);
//     }
// });

// Alter Table
// query = `ALTER TABLE users ADD location VARCHAR(100)`;
// connection.query(query, (err, result) => {
//     if (!err) {
//         console.log("Successfully Modified Users Tables");
//     } else {
//         console.log(err);
//     }
// });
// Truncate Table
// query = `TRUNCATE TABLE enrolls`;
// connection.query(query, (err, result) => {
//     if (!err) {
//         console.log("Successfully Truncated Enrolls Tables");
//     } else {
//         console.log(err);
//     }
// });
// Drop Table
// query = `DROP TABLE users`;
// connection.query(query, (err, result) => {
//     if (!err) {
//         console.log("Successfully Deleted Enrolls Table Completely");
//     } else {
//         console.log(err);
//     }
// });
// CRUD Operations
// Insert a Record
// query = `INSERT INTO users (email,password) VALUES('harry@gmail.com','root')`;
// query = `INSERT INTO users SET ?`;
// connection.query(query,[{email:"haritha@gmail.com",password:"root123"}], (err, result) => {
//     if (!err) {
//         console.log("Successfully Inserted record");
//     } else {
//         console.log(err);
//     }
// });
// Select Table
// query = `SELECT * FROM users`;
// query = `SELECT email,password FROM users`;
// query = `SELECT COUNT(*) FROM users`;
// connection.query(query, (err, result) => {
//     if(result.length > 0){
//         console.log(result);
//     }else{
//         console.log(err);
//     }
//     if (!err) {
//         console.log("Successfully got records");
//     } else {
//         console.log(err);
//     }
// });
// SQL Injection and protection - hacking
let id="1 or 1=1";
// let email='harry@gmail.com" OR ""="';
// let password='root" OR ""="';
// let id="1 or 1=1; SHOW DATABASES; USE nodetraining; SHOW TABLES; DROP DATABASE nodetraining;";
// query = `SELECT * FROM users where id=?`; //protection1
// query = `SELECT * FROM users where id=`+mysql.escape(id); //protection2
// // query = 'SELECT * FROM users where email="'+email+'" and password="'+password+'"';
// connection.query(query, (err, result) => {
//     if( result && result.length > 0){
//         console.log(result);
//     }else{
//         console.log(err);
//     }
//     if (!err) {
//         console.log("Successfully got records");
//     } else {
//         console.log(err);
//     }
// });
// Update a record
// query =`UPDATE users SET password='login@123'`;// Updates all the records
// query = `UPDATE users SET password='login@123' where id=1`;
// query = `UPDATE users SET ? where ?`;
// connection.query(query,[{password:'test@123'},{id:1}], (err, result) => {
//     if (!err) {
//         console.log("Successfully Updated records");
//     } else {
//         console.log(err);
//     }
// });
// Delete a record
// query = `DELETE FROM users`; // Deletes all the records and starts indexing from last index but trancate starts id from 1
// query = `DELETE FROM users where ?`;
// connection.query(query,[{id:2}], (err, result) => {
//     if (!err) {
//         console.log("Successfully Deleted record");
//     } else {
//         console.log(err);
//     }
// });
