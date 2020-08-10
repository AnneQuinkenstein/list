import React, { useState, useEffect } from 'react';

const Task = ({ userName, taskId, editName, handleClick, index }) => {
    const [task, setTask] = useState(userName); 
    const [hidden, setHidden] = useState(false);
    const [randNum, setRandNum] = useState(null);
    const [randNum2, setRandNum2] = useState(null);


    const handleEdit = (task, index) => {
        if (hidden === true) {
            editName(task, index);
        }
        setHidden(!hidden)
    }

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    useEffect(() => {
        setRandNum(Math.random() * 70);
        setRandNum2(Math.random() * 70);
    }, [])


    useEffect(() => { });


    const style = {
        zIndex: index,
        top: `${randNum}%`,
        left: `${randNum2}%`,

    }

    return (
        <div className="task" style={style}>
            <div className={hidden ? 'hidden' : 'visible'}>{userName}</div>
            <div className={hidden ? 'visible' : 'hidden'} > <input onChange={handleChange} type="text" name="task" value={task}></input></div>
            <button onClick={() => handleClick(taskId)}>Delete Task</button>
            <button onClick={() => handleEdit(task, index)}>{hidden ? 'Confirm Change' : 'Edit Task'} </button>
        </div>
    )
}

export default Task; 