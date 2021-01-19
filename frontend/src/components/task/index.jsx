import React from 'react'
import './task.css'

const Task = ({taskMessage, deleteTask}) => {
  return (
    <div className='task' >
    <div>
      <input type="checkbox" />
      <p className='task-description'>{taskMessage}</p>
    </div>
    <div>
      <button className="edit" ><i className="fas fa-edit"></i></button>
      <button className="delete" onClick={() => deleteTask(taskMessage)} ><i className="fas fa-trash-alt"></i></button>
    </div>
  </div>
  )
}

export default Task

