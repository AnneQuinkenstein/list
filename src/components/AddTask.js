import React, { useState } from "react";
import SelectCathegory from "./SelectCathegory";

const AddTask = ({ addTask, uniqueCathegories, handleChoice, selection }) => {
  const [name, setName] = useState("");

  //handle AddTask Input
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    addTask(name);
    setName(" ");
    event.preventDefault();
  };
  
  return (
    <>
    <SelectCathegory uniqueCathegories={uniqueCathegories} handleChoice={handleChoice}/>
    <div className="addTask">
   
    <form  onSubmit={handleSubmit}>
     Füge weitere Not-To-Do Aufgaben zur ausgewählten Kategorie! 
      <textarea
        className="inp-sit"
        onChange={handleChange}
        value={name}
        type="text"
        autoFocus
      />
      <input className="btn-sit active" type="submit" value="Submit" />
    </form>
    </div>
    </>
  );
};

export default AddTask;
