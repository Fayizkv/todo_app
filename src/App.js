import React,{useState} from 'react';
import Main  from './Main';

function App() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (e)=>{
    setTask(e.target.value);
  }

  const addTask = ()=>{
    if (task.trim()){
    setTasks([...tasks, {id : Date.now(), task: task, status : false}]);
    setTask('');}
  }
  return (
    <div className="App">
      <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter a task"
        />
        <button onClick={addTask} >+</button>
      {


      }
      <Main tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
