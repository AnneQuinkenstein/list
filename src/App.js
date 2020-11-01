import React, { useEffect, useState } from "react";
import "./App.css";
import Task from "./components/Task";
import Title from "./components/Title";
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import data from "./components/data";

const App = () => {
  const [tasks, setTasks] = useState(null);
  const [showTasks, setShowTasks] = useState(null);
  const [zIndexNum, setZIndexNum] = useState(100);
  const [selection, setSelection] = useState("keine Kategorie wählen");

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

  //select Category
  const handleChoice = (event) => {
    setSelection(event.target.value);
  };

  //  add Task
  const addTask = (name) => {
    setTasks([...tasks, { id: uuidv4(), name: name, cathegory: selection }]);
  };

  //edit Task in <Task>
  const editName = (name, index) => {
    tasks[index].name = name;
    setTasks((prevState) => [...prevState]);
  };

  //filter Choice
  useEffect(() => {
    const filterChoice = () => {
      if (selection === "keine Kategorie wählen") {
        setShowTasks(tasks);
      } else {
        setShowTasks(tasks.filter((task) => task.cathegory === selection));
      }
    };
    // eslint-disable-next-line no-lone-blocks
    {
      tasks && filterChoice();
    }
  }, [selection, tasks]);

  //set zIndex, so that the PostIt appears on Top onClick
  const countNum = () => setZIndexNum(zIndexNum + 1);

  const cathegories = tasks && tasks.map((task) => task.cathegory);
  const uniqueCathegories = [...new Set(cathegories)];

  return (
    <div className="App">
      <div className="titleGroup">
      <Title />
        {uniqueCathegories && (
          <AddTask
            addTask={addTask}
            handleChoice={handleChoice}
            uniqueCathegories={uniqueCathegories}
            selection={selection}
          />
        )}
      </div>
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
     
    </div>
  );
};

export default App;
