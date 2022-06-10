import React, { useState } from "react";
import '../style/TaskForm.css'
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props){

    const [input, setInput ] = useState('');

    const handleChange = e =>{
        setInput(e.target.value);
    };

    const handleTask = e => {
        e.preventDefault();

        const taskNew ={
            id: uuidv4(),
            text: input,
            complete: false
        };

        props.onSubmit(taskNew);
    };

    return(
        <form className="task-form" onSubmit={handleTask}>
            <input className="task-input" type='text' placeholder="Write a task" name="text" onChange={handleChange} />
            <button className="task-button">Add Task</button>
        </form>    
    );
}

export default TaskForm;