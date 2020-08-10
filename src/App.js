import React, { useEffect, useState } from 'react';
import './App.css';
import Task from './components/Task';
import AddTask from './components/AddTask';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const App = () => {
  const [users, setUsers] = useState(null);

  //calling API on mounting
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  //delete User in <User>
  const handleClick = (id) => {
    setUsers(users.filter(task => (task.id !== id)))
  }

  //add User in <AddTask>
  const addTask = (name) => {
    setUsers([...users, { id: uuidv4(), name: name }])
  }

  //edit User in <User> 
  const editName = (name, index) => {
    users[index].name = name;
    setUsers((prevState => [
      ...prevState]))
  }

  return (
    <div className="App">
      <h1>my not to do list</h1>
      <div >
        <TransitionGroup className='tasksList'>
          {users && users.map((task, index) =>
            <CSSTransition
              key={task.id}
              timeout={500}
              classNames='singleTask'
            >
              <Task 
                editName={editName}
                handleClick={handleClick}
                userName={task.name}
                key={task.id}
                taskId={task.id}
                index={index}
              />
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
      <AddTask addTask={addTask} />
    </div>
  );
}

export default App;
