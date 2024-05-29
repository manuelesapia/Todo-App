import React, { useState } from "react";

function Form({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    setTaskName(e.target.value);
    if (e.target.value.trim() !== "") {
      setError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName("");
    } else {
      setError("Please enter a task.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={taskName}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default Form;
