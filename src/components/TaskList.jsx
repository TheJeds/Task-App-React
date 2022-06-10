import React, { useState } from "react";
import TaskForm from "./TaskForm";
import '../style/TaskList.css'
import Task from './Task';

function TaskList(){

    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if(task.text.trim()){
            task.text = task.text.trim();
            const updatedTasks = [task, ...tasks];
            setTasks(updatedTasks);
        }
    }

    return(
        <>
            <TaskForm onSubmit={addTask} />
            <div className="task-list-container">
                {
                    tasks.map((task) =>
                        <Task key={task.id} id={task.id} text={task.text} complete={task.complete} />
                    )
                }
            </div>
        </>
    );
}

export default TaskList;