import React, { useState } from "react";

function Pending({ tasks, setTasks }) {
  const handleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = !updatedTasks[index].status;
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="todos">
      <h1 className="todo-heading">Pending Tasks</h1>
      <ul>
        {tasks.map((task, index) =>
          !task.status ? (
            <li key={task.id} className="todo">
              <div className="left">
                <input
                  type="checkbox"
                  checked={task.status}
                  onChange={() => handleCompleted(index)}
                  className="checkbox"
                />
                <label>{task.task}</label>
              </div>
              <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                <i className="fas fa-trash"></i> Delete
              </button>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default Pending;
