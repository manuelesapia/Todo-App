import React, { useState } from "react";

function Task({ task, toggleTaskCompleted, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newLabel, setNewLabel] = useState(task.label);

  function handleEditChange(e) {
    setNewLabel(e.target.value);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    editTask(task.id, newLabel);
    setIsEditing(false);
  }

  const viewTemplate = (
    <div className="c-cb">
      <input
        id={`todo-${task.id}`}
        type="checkbox"
        defaultChecked={task.isChecked}
        onChange={function () {
          toggleTaskCompleted(task.id);
        }}
      />
      <label className="todo-label" htmlFor={`todo-${task.id}`}>
        {task.label}
      </label>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={function () {
            setIsEditing(true);
          }}
        >
          Edit <span className="visually-hidden">{task.label}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={function () {
            deleteTask(task.id);
          }}
        >
          Delete <span className="visually-hidden">{task.label}</span>
        </button>
      </div>
    </div>
  );

  const editTemplate = (
    <form onSubmit={handleEditSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={`edit-todo-${task.id}`}>
          New name for {task.label}
        </label>
        <input
          id={`edit-todo-${task.id}`}
          className="todo-text"
          type="text"
          value={newLabel}
          onChange={handleEditChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={function () {
            setIsEditing(false);
          }}
        >
          Cancel <span className="visually-hidden">renaming {task.label}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save{" "}
          <span className="visually-hidden">new name for {task.label}</span>
        </button>
      </div>
    </form>
  );

  return (
    <li className="todo stack-small">
      {isEditing ? editTemplate : viewTemplate}
    </li>
  );
}

function Tasks({ tasks, toggleTaskCompleted, deleteTask, editTask }) {
  return (
    <>
      <h2 id="list-heading">{tasks.length} tasks remaining</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {tasks.map(function (task) {
          return (
            <Task
              key={task.id}
              task={task}
              toggleTaskCompleted={toggleTaskCompleted}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Tasks;
