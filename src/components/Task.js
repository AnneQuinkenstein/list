import React, { useState, useEffect } from 'react';

const Task = ({ userName, taskId, editName, handleClick, index }) => {
    const [task, setTask] = useState(userName);
    const [hidden, setHidden] = useState(false);
    const [style, setStyle]= useState({
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
        const randNum2 = Math.random() * 70;
        setStyle({
            zIndex: index,
            top: `${randNum}%`,
            left: `${randNum2}%`,
        })
    }, [])

    const handleIndex = () => {
        const num =`${Math.floor(Math.random()*100)}`; 
        setStyle({
            zIndex: num,
            top: 'style[top]',
            left: 'style[left]',
        })
    }

    

    return (
        <div className="task" onClick={handleIndex} style={style}>
            <div className={hidden ? 'hidden' : 'visible'}>{userName}</div>
            <div className={hidden ? 'visible' : 'hidden'} > <input onChange={handleChange} type="text" name="task" value={task}></input></div>
            <button className="deleteButton" onClick={() => handleClick(taskId)}><i class="material-icons">delete</i></button>
            <button className="editButton" onClick={() => handleEdit(task, index)}>{hidden ? <i class="material-icons">check_circle</i> : <i class="material-icons">border_color</i>} </button>
        </div>
    )
}

export default Task; 