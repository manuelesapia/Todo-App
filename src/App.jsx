import React, { useState } from "react";
import Tasks from "./components/Tasks";
import Form from "./components/Form";
import Banner from "./components/Banner";
import Filters from "./components/Filters";

const initialData = [
  { label: "Eat", id: "0", isChecked: true },
  { label: "Sleep", id: "1", isChecked: false },
  { label: "Repeat", id: "2", isChecked: false },
];

function addTask(tasks, setTasks, label) {
  const newTask = {
    label: label,
    id: Date.now().toString(),
    isChecked: false,
  };
  setTasks([...tasks, newTask]);
}

function toggleTaskCompleted(tasks, setTasks, id) {
  const updatedTasks = tasks.map(function (task) {
    return task.id === id ? { ...task, isChecked: !task.isChecked } : task;
  });
  setTasks(updatedTasks);
}

function deleteTask(tasks, setTasks, id) {
  const remainingTasks = tasks.filter(function (task) {
    return task.id !== id;
  });
  setTasks(remainingTasks);
}

function editTask(tasks, setTasks, id, newLabel) {
  const editedTasks = tasks.map(function (task) {
    return task.id === id ? { ...task, label: newLabel } : task;
  });
  setTasks(editedTasks);
}

function changeFilter(setFilter, filter) {
  setFilter(filter);
}

function getFilteredTasks(tasks, filter) {
  if (filter === "Active") {
    return tasks.filter((task) => !task.isChecked);
  } else if (filter === "Completed") {
    return tasks.filter((task) => task.isChecked);
  } else {
    return tasks;
  }
}

function App() {
  const [tasks, setTasks] = useState(initialData);
  const [filter, setFilter] = useState("All");

  return (
    <main>
      <section className="todoapp stack-large">
        <Banner />
        <Form
          addTask={function (label) {
            addTask(tasks, setTasks, label);
          }}
        />
        <Filters
          changeFilter={function (filter) {
            changeFilter(setFilter, filter);
          }}
        />
        <Tasks
          tasks={getFilteredTasks(tasks, filter)}
          toggleTaskCompleted={function (id) {
            toggleTaskCompleted(tasks, setTasks, id);
          }}
          deleteTask={function (id) {
            deleteTask(tasks, setTasks, id);
          }}
          editTask={function (id, newLabel) {
            editTask(tasks, setTasks, id, newLabel);
          }}
        />
      </section>
    </main>
  );
}

export default App;
