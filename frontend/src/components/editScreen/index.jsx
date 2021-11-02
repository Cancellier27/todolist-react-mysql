import './edit.css'

const EditScreen = ({
  editHandleMessage,
  createNewTaskWithEnter,
  createNewTasksWithTheEditedMessage,
  setIsEditing,
  completed,
  handleChecked
}) => {
  return (
    <div className="editingScreen" >
      <section className="edit-container" >
        <span className="spanTitle">Edit your task:</span>
        <div className="divContainer" >
          <input
            className='editCheckbox'
            type="checkbox"
            checked={completed}
            onChange={handleChecked}
          />
          <input
            autoFocus
            type="text"
            className="inputEditTask"
            onChange={editHandleMessage}
            onKeyPress={(e) => createNewTaskWithEnter(e, 2)}
          />
          <div className="btnContainer" >
            <button type="submit"
              onClick={createNewTasksWithTheEditedMessage}
              className="doneBtn" >
              Done
                </button>
            <button type="submit"
              onClick={() => setIsEditing(false)}
              className="cancelBtn" >
              Cancel
                </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EditScreen