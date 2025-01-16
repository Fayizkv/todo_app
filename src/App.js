import React, { useState } from 'react';
import Completed from './Completed';
import Pending from './Pending';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), task: task, status: false }]);
      setTask('');
    }
  };

  return (
    <div className="app">

      <div className="input">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter a task"
        />
        <i onClick={addTask}>+</i>
      </div>

      <div className="todos">
        <Pending tasks={tasks} setTasks={setTasks} />
        <Completed tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
