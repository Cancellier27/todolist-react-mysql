import React from 'react'
import './task.css'

const Task = ({ taskMessage, deleteTask, editTask, completed }) => {
  return (
    <div className='task' >
      <div>
        <input className="taskCheckbox" type="checkbox" readOnly checked={completed} />
        <p className='task-description'>{taskMessage}</p>
      </div>
      <div>
        <button
          className="edit"
          onClick={() => editTask(taskMessage)} >
          <i className="fas fa-edit"></i>
        </button>
        <button
          className="delete"
          onClick={() => deleteTask(taskMessage)} >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  )
}

export default Task

