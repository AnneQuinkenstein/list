import React, { useEffect, useState } from "react";
import "./App.css";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import data from "./components/data";

const App = () => {
  const [tasks, setTasks] = useState(null);

  //calling API on mounting
  // useEffect(() => {
  //   fetch('https://secure-retreat-69254.herokuapp.com/tasks')
  //     .then(res => res.json())
  //     .then(data => setTasks(data));
  // }, [])

  useEffect(() => {
    setTasks(data);
  }, []);

  //delete Task in <Task>
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //add Task in <AddTask>
  const addTask = (name, selection) => {
    setTasks([...tasks, { id: uuidv4(), name: name, cathegory: selection }]);
  };

  //edit Task in <Task>
  const editName = (name, index) => {
    tasks[index].name = name;
    setTasks((prevState) => [...prevState]);
  };

  const cathegories = tasks && tasks.map((task) => task.cathegory);
  const uniqueCathegories = [...new Set(cathegories)];

  return (
    <div className="App">
      <div className="titlegroup">
        <h1 className="title">my not to do list</h1>
        {uniqueCathegories && (
          <AddTask addTask={addTask} uniqueCathegories={uniqueCathegories} />
        )}
      </div>
      <TransitionGroup className="tasksList">
        {tasks &&
          tasks.map((task, index) => (
            <CSSTransition key={task.id} timeout={1000} classNames="singleTask">
              <Task
                editName={editName}
                handleDelete={handleDelete}
                taskName={task.name}
                taskCathegory={task.cathegory}
                key={task.id}
                taskId={task.id}
                index={index}
                listLength={tasks.length}
              />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
};

export default App;
