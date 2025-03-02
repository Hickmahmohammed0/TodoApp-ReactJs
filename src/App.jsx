import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const taskName = prompt("Enter task name:");
    if (taskName) {
      setTasks([...tasks, taskName]);
    }
  };

  const editTask = (index) => {
    const newTitle = prompt("Edit your task:", tasks[index]);
    if (newTitle) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = newTitle;
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  useEffect(() => {
    document.title = "Todo app";
  }, []);

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <button className="addTaskBtn" onClick={addTask}>+ New To-Do List</button>

      <div className="tasks-container">
        <div className="task-header">
          <span>All My Tasks</span>
          <span className="task-count">{tasks.length}</span>
        </div>

        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <span className="task-title">{task}</span>
            <div className="task-buttons">
              <button className="edit-btn" onClick={() => editTask(index)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
