import { useState, useEffect } from 'react'
import Axios from 'axios'

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
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const URL = 'http://localhost:3001/api/selectAll'

    Axios.get(URL).then((res) => {
      setTasks([...res.data])
    })
  }, [])

  function refreshPage() {
    window.location.reload(false);
  }

  function createNewTask() {
    if (newTask === '') return alert('Create a task first')
    if (tasks.includes(newTask)) return alert('This task was already created!')

    Axios.post('http://localhost:3001/api/insert', { newTask: newTask })

    setTasks([...tasks, { message: newTask, completed: false }])

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
    Axios.delete(`http://localhost:3001/api/erase/${message}`)
    refreshPage()
  }

  function editTask(message) {
    setIsEditing(true)
    setEditMessage(message)
  }

 async function createNewTasksWithTheEditedMessage() {
    for (let item of tasks) {
      if (item === msgEdited && item !== editMessage) {
        alert('This task already exists')
        return
      }
    }

    if (msgEdited === '') {
      Axios.put('http://localhost:3001/api/update', {
        newMessage: editMessage,
        completed: isChecked,
        message: editMessage
      })

      setIsEditing(false)
      refreshPage()
      return
    }

    Axios.put('http://localhost:3001/api/update', {
      newMessage: msgEdited,
      completed: isChecked,
      message: editMessage
    })

    setIsEditing(false)
    refreshPage()
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
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => createNewTaskWithEnter(e, 1)}
          />
          <button
            type="submit"
            className="addBtn"
            onClick={createNewTask}
          > Add
          </button>
        </div>
      </section>

      <section className="tasks-container" >
        {tasks.map((item) => {
          return <Task
            taskMessage={item.message}
            key={item.message}
            completed={!!item.completed}
            deleteTask={deleteTask}
            editTask={editTask} />
        })}
      </section>

      {isEditing && <EditScreen
        completed={isChecked}
        handleChecked={() => setIsChecked(!isChecked)}
        editHandleMessage={(e) => setMsgEdited(e.target.value)}
        createNewTaskWithEnter={createNewTaskWithEnter}
        createNewTasksWithTheEditedMessage={createNewTasksWithTheEditedMessage}
        setIsEditing={setIsEditing}
      />}

    </div>
  );
}

export default App;
