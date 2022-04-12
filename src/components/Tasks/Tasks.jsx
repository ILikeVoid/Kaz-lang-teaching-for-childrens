import React from "react";
import s from "./Tasks.module.css"

const Tasks = () => {
    return(
        <div className={s.tasks}>
            <h1>Tasks</h1>
            <textarea />
            <button>Add post</button>
        </div>
    )
}

export default Tasks;