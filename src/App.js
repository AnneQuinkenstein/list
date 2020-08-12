import React, { useEffect, useState } from 'react';
import './App.css';
import Task from './components/Task';
import AddTask from './components/AddTask';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const App = () => {
  const [tasks, setTasks] = useState(null);

  //calling API on mounting
  useEffect(() => {
    fetch('https://secure-retreat-69254.herokuapp.com/tasks')
      .then(res => res.json())
      .then(data => setTasks(data)); 
  }, [])

  //delete Task in <Task>
  const handleClick = (id) => {
    setTasks(tasks.filter(task => (task.id !== id)))
  }

  //add Task in <AddTask>
  const addTask = (name) => {
    setTasks([...tasks, { id: uuidv4(), name: name }])
  }

  //edit Task in <Task> 
  const editName = (name, index) => {
    tasks[index].name = name;
    setTasks((prevState => [
      ...prevState]))
  }

  console.log(tasks);

  return (
    <div className="App">
      <h1>my not to do list</h1>
      <AddTask addTask={addTask} />
    
        <TransitionGroup className='tasksList'>
          {tasks && tasks.map((task, index) =>
            <CSSTransition
              key={task.id}
              timeout={1000}
              classNames='singleTask'
            >
              <Task 
                editName={editName}
                handleClick={handleClick}
                taskName={task.name}
                taskCathegory={task.cathegory}
                key={task.id}
                taskId={task.id}
                index={index}
              />
            </CSSTransition>
          )}
        </TransitionGroup>
    
    </div>
  );
}

export default App;
