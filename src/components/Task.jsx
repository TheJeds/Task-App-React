import React from "react";
import '../style/Task.css'

function Task({ text }) {
    return(
        <div className="task-container">
            <div className="task-text">
                {text}
            </div>
            <div className="task-icon">
                Icon
            </div>
        </div>
    );
}

export default Task;