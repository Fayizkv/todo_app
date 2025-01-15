import React,{useState} from "react";
import Completed from './Completed';

function Main({tasks, setTasks}){

    const handleCompleted = (index)=>{
        const updatedTasks = [...tasks];
        updatedTasks[index].status = !updatedTasks[index].status;
        setTasks(updatedTasks);
    }
    return(
        <div>
            <h1>Pending Tasks</h1>
        <ul>
            {tasks.map((task,index)=>(
                 !task.status &&  (<li>
                   <label key={task.id}>
                   <input
                    type="checkbox"
                    checked={task.status}
                    onChange={() => handleCompleted(index)} 
                    />
                     {task.task}
                   </label>
                 </li> )
            ))}
        </ul>
        <Completed tasks={tasks}/>
        </div>
    )
}


export default Main;