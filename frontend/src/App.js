import { useState } from 'react'

import './App.css';

import Header from './components/header'
import Task from './components/task'
import EditScreen from './components/editScreen'

function App() {
  const [tasks, setTasks] = useState([])

  const [newTask, setNewTask] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editMessage, setEditMessage] = useState('')
  const [msgEdited, setMsgEdited] = useState('')

  function newTaskInput(e) {
    setNewTask(e.target.value)
  }

  function createNewTask() {
    if (newTask === '') return alert('Create a task first')
    if (tasks.includes(newTask)) return alert('This task was already created!')

    setTasks([...tasks, newTask])
    setNewTask('')

    document.querySelector('.inputTask').value = ''
    document.querySelector('.inputTask').focus()
  }

  function createNewTaskWithEnter(event, n) {
    if (event.charCode === 13) {
      if (n === 1) {
        createNewTask()
      }
      if (n === 2) {
        createNewTasksWithTheEditedMessage()
      }
    }
  }

  function deleteTask(message) {
    setTasks(
      tasks.filter(item => item !== message)
    )
  }

  function editTask(message) {
    setIsEditing(true)
    setEditMessage(message)
  }

  function editHandleMessage(e) {
    setMsgEdited(e.target.value)
  }

  function createNewTasksWithTheEditedMessage() {
    for(let item of tasks) {
      if (item === msgEdited && item !== editMessage) {
        alert('This task already exists')
        return
      }
    }
    
    const newTasks = tasks.map(item => {
      if (item === editMessage) return msgEdited
      return item
    })

    setTasks(newTasks)
    setIsEditing(false)
  }



  return (
    <div className="App">
      <Header />

      <section className="query-container" >
        <span className="spanTitle" >Type your new task:</span>
        <div className="divContainer" >
          <input
            autoFocus
            type="text"
            className="inputTask"
            onChange={newTaskInput}
            onKeyPress={(e) => createNewTaskWithEnter(e, 1)}
          />
          <button type="submit" onClick={createNewTask} className="addBtn" >Add</button>
        </div>
      </section>

      <section className="tasks-container" >
        {tasks.map((item, index) => {
          return <Task taskMessage={item} key={index} deleteTask={deleteTask} editTask={editTask} />
        })}
      </section>

      {isEditing && <EditScreen 
        editMessage={editMessage}
        editHandleMessage={editHandleMessage}
        createNewTaskWithEnter={createNewTaskWithEnter}
        createNewTasksWithTheEditedMessage={createNewTasksWithTheEditedMessage}
        setIsEditing={setIsEditing}
      />}

    </div>
  );
}

export default App;
