import React, { useState } from 'react'; 

const AddUser = ({ addUser }) => {

    const [name, setName]= useState('')

    const handleChange = (e) => {
        setName(e.target.value); 
    }
    
    const handleSubmit = (name) => {
        addUser(name); 
        setName(' '); 
    }

    return(
        <div className='addUser'> 
            <input onChange={handleChange} value={name} type='text' autoFocus></input>
            <button onClick={() => handleSubmit(name)}>add user</button>
        </div>
    )
}

export default AddUser