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
  connection.end()
})

app.listen(port, () => {
  console.log(`Server running at door ${port}`)
})

