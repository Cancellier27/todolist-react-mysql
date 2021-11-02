const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
const port = 3001

const connection = mysql.createConnection(config)

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(port, () => {
  console.log(`Server running at door ${port}`)
})

app.get('/api/selectAll', (req, res) => {
  const sqlSelectAll = 'SELECT * FROM alltasks';
  connection.query(sqlSelectAll, (err, result) => {
    res.send(result)
  })
})

app.post('/api/insert', (req, res) => {
  const {newTask} = req.body

  const sqlNewRow = 'INSERT INTO alltasks(message, completed) VALUE (?,false)';
  connection.query(sqlNewRow, [newTask],(err, result) => {
    console.log('New row added!')
  })
})

app.delete('/api/erase/:id', (req, res)  => {
  const {id} =  req.params

  const sqlDel =  'DELETE FROM alltasks WHERE id = ?'
  connection.query(sqlDel, id, (err, result) => {
    console.log('Item deleted')
  })
})

app.put('/api/update', (req, res)  => {
  const {newMessage, completed, message} =  req.body

  const sqlUpdate =  'UPDATE alltasks SET message =  ?, completed = ? WHERE message = ?'
  connection.query(sqlUpdate, [newMessage, completed, message], (err, result) => {
    console.log(result)
  })
})
