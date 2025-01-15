import React from "react";

function Completed({tasks}){

    return(
        <div>
            <h1>
                Completed Tasks
            </h1>
                {
                    tasks.map((task)=>(
                    task.status &&  (<li>
                      <label key={task.id}>
                        {task.task}
                      </label>
                    </li> )
               ))}
        </div>
    )
}

export default Completed