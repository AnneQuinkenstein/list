import React, { useState, useEffect } from 'react';

const User = ({ userName, userId, editName, handleClick, index }) => {
    const [name, setName] = useState(userName)
    const [hidden, setHidden] = useState(false);
    const [randNum, setRandNum] = useState(null);
    const [randNum2, setRandNum2] = useState(null);


    const handleEdit = (name, index) => {
        if (hidden === true) {
            editName(name, index);
        }
        setHidden(!hidden)
    }

    const handleChange = (e) => {
        setName(e.target.value);
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
        <div className="user" style={style}>
            <div className={hidden ? 'hidden' : 'visible'}>{userName}</div>
            <div className={hidden ? 'visible' : 'hidden'} > <input onChange={handleChange} type="text" name="name" value={name}></input></div>
            <button onClick={() => handleClick(userId)}>Delete User</button>
            <button onClick={() => handleEdit(name, index)}>{hidden ? 'Confirm Change' : 'Edit User'} </button>
        </div>
    )
}

export default User; 