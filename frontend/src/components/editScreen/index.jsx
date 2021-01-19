import './edit.css'

const EditScreen = ({
  editMessage,
  editHandleMessage,
  createNewTaskWithEnter,
  createNewTasksWithTheEditedMessage,
  setIsEditing
}) => {
  return (
    <div className="editingScreen" >
      <section className="edit-container" >
        <span className="spanTitle">Edit your task:</span>
        <div className="divContainer" >
          <input
            autoFocus
            type="text"
            className="inputEditTask"
            defaultValue={editMessage}
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