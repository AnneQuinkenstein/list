import React, { useState } from 'react'; 

const AddTask = ({ addTask }) => {

    const [name, setName]= useState('')

    const handleChange = (e) => {
        setName(e.target.value); 
    }
    
    const handleSubmit = (name) => {
        addTask(name); 
        setName(' '); 
    }

    return(
        <div className='addTask'> 
            <input onChange={handleChange} value={name} type='text' autoFocus></input>
            <button onClick={() => handleSubmit(name)}>add task</button>
        </div>
    )
}

export default AddTask