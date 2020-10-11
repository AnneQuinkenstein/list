import React, { useEffect, useState } from "react";
import "./App.css";
import Task from "./components/Task";
import Title from "./components/Title";
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import data from "./components/data";
import FilterCards from "./components/FilterCards";

const App = () => {
  const [tasks, setTasks] = useState(null);
  const [showTasks, setShowTasks] = useState(null);
  const [zIndexNum, setZIndexNum] = useState(100);

  //calling API on mounting
  // useEffect(() => {
  //   fetch('https://secure-retreat-69254.herokuapp.com/tasks')
  //     .then(res => res.json())
  //     .then(data => setTasks(data));
  // }, [])

  useEffect(() => {
    setTasks(data);
  }, []);

  useEffect(() => {
    setShowTasks(tasks);
    filterChoice("keine Kategorie wählen");
  }, [tasks]);

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

  //filter Choice
  const filterChoice = (cath) => {
    if (cath === "keine Kategorie wählen") {
      setShowTasks(tasks);
    } else {
      setShowTasks(tasks.filter((task) => task.cathegory === cath));
    }
  };

  //set zIndex, so that the PostIt appears on Top onClick
  const countNum = () => setZIndexNum(zIndexNum + 1);

  const cathegories = tasks && tasks.map((task) => task.cathegory);
  const uniqueCathegories = [...new Set(cathegories)];

  return (
    <div className="App">
      <Title />
      <TransitionGroup className="tasksList">
        {showTasks &&
          showTasks.map((task, index) => (
            <CSSTransition key={task.id} timeout={1000} classNames="singleTask">
              <Task
                editName={editName}
                handleDelete={handleDelete}
                taskName={task.name}
                taskCathegory={task.cathegory}
                key={task.id}
                taskId={task.id}
                index={index}
                zIndexNum={zIndexNum}
                countNum={countNum}
              />
            </CSSTransition>
          ))}
      </TransitionGroup>
      <div className="footerGroup">
        {uniqueCathegories && (
          <FilterCards
            filterChoice={filterChoice}
            uniqueCathegories={uniqueCathegories}
          />
        )}
        {uniqueCathegories && (
          <AddTask addTask={addTask} uniqueCathegories={uniqueCathegories} />
        )}
      </div>
    </div>
  );
};

export default App;
