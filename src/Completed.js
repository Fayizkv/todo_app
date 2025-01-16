import React from "react";

function Completed({ tasks }) {
  return (
    <div className="todos">
      <h1 className="todo-heading">Completed Tasks</h1>
      <ul>
        {tasks.map(
          (task) =>
            task.status && (
              <li key={task.id} className="todo completed">
                <div className="left">
                  <input
                    type="checkbox"
                    checked={task.status}
                    disabled
                    className="checkbox"
                  />
                  <label>{task.task}</label>
                </div>
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default Completed;
