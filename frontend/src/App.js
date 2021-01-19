import './App.css';
import Header from './components/header'
import Task from './components/task'
import { useState } from 'react'

function App() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

  function newTaskInput(e) {
    setNewTask(e.target.value)
  }

  function createNewTask() {
    if(newTask === '') return alert('Create a task first')
    if(tasks.includes(newTask)) return alert('This task was already created!')

    setTasks([...tasks, newTask])
    setNewTask('')

    document.querySelector('.inputTask').value = ''
    document.querySelector('.inputTask').focus()
  }

  function createNewTaskWithEnter(event) {
    if (event.charCode === 13) {
      createNewTask()
    }
  }

  function deleteTask(message) {
    setTasks(
      tasks.filter(item => item !== message)
    )
  }

  return (
    <div className="App">
      <Header />

      <section className="query-container" >
        <span>Type your new task:</span>
        <div>
          <input
            autoFocus
            type="text"
            className="inputTask"
            onChange={newTaskInput}
            onKeyPress={createNewTaskWithEnter}
          />
          <button type="submit" onClick={createNewTask}  >Add</button>
        </div>
      </section>

      <section className="tasks-container" >
        {tasks.map((item, index) => {
          return <Task taskMessage={item} key={index} deleteTask={deleteTask}/>
        })}
      </section>

    </div>
  );
}

export default App;
