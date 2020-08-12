import React, { useState, useEffect } from 'react';

const Task = ({ taskName, taskCathegory, taskId, editName, handleClick, index }) => {
    const [task, setTask] = useState(taskName);
    const [hidden, setHidden] = useState(false);
    const [style, setStyle] = useState({
        zIndex: index,
        top: '',
        left: '',
    });

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
        const randNum = Math.random() * 70;
        const randNum2 = Math.random() * 90;
        setStyle({
            zIndex: index,
            top: `${randNum}%`,
            left: `${randNum2}%`,
        })
    }, [])

    const handleIndex = (e) => {
        const num = `${Math.floor(Math.random() * 100)}`;
        setStyle({
            zIndex: num,
            top: 'style[top]',
            left: 'style[left]',
        })
        e.preventDefault();
    }


    return (
        <div onClick={handleIndex} style={style}>
            <a href={taskId}>
                <h2>{taskCathegory}</h2>
                <p className={hidden ? 'hidden' : 'visible'}>{taskName}</p>
                <p className={hidden ? 'visible' : 'hidden'} > <input onChange={handleChange} type="text" name="task" value={task}></input></p>
                <div className='button'>
                    <button className="deleteButton" onClick={() => handleClick(taskId)}><i class="material-icons">delete</i></button>
                    <button className="editButton" onClick={() => handleEdit(task, index)}>{hidden ? <i class="material-icons">check_circle</i> : <i class="material-icons">border_color</i>} </button>
                </div>
            </a>
        </div>
    )
}

export default Task; 