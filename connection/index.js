const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "employeeTracker",
  password: "Chillyshark386",
})
connection.connect(function(err){
  if(!err){
    
  }
})
module.exports = connection