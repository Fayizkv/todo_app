import React from "react";

function Main({tasks}){

    return(
        <ul>
            {tasks.map((task,index)=>(
                <li key={index}>{task}</li>
            ))}
        </ul>
    )
}


export default Main;