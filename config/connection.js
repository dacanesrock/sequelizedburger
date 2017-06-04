// Set up MySQL connection.
var mysql = require("mysql");
var dotenv = require("dotenv").config();

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "geyekirb1",
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;