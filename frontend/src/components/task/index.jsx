import React from 'react'
import './task.css'

const Task = () => {
  return (
    <div className='task' >
    <div>
      <input type="checkbox" />
      <p className='task-description'> Try to understand database in programming </p>
    </div>
    <div>
      <button className="edit" ><i className="fas fa-edit"></i></button>
      <button className="delete" ><i className="fas fa-trash-alt"></i></button>
    </div>
  </div>
  )
}

export default Task

