const mysql = require('mysql');

//Create a connection to the database
const connection=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "mydb"
});

//open the mysql connection
connection.connect((err)=> {
    if (err) console.log(err.message);
    else {console.log('Connected to the database successfully');}
});
module.exports = connection;