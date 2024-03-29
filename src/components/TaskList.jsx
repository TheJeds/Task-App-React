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
    };

    const completeTask = id => {
        const updatedTasks = tasks.map(task => {
            if(task.id === id){
                task.complete = !task.complete;
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const deleteTask = id => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    return(
        <>
            <TaskForm onSubmit={addTask} />
            <div className="task-list-container">
                {
                    tasks.map((task) =>
                        <Task key={task.id} id={task.id} text={task.text} complete={task.complete} deleteTask={deleteTask} completeTask={completeTask} />
                    )
                }
            </div>
        </>
    );
}

export default TaskList;