const mysql = require('mysql') 
const config = require('./config')

const createNewRow = ({message}) => {
  let connection = mysql.createConnection(config);
  
  let newRow = `INSERT INTO allTasks(message,completed)
             VALUES(${message},true)`;
  
  connection.query(newRow);
  
  connection.end();
}

module.exports = createNewRow