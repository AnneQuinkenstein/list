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
    <form className="addTask" onSubmit={handleSubmit}>
      <SelectCathegory uniqueCathegories={uniqueCathegories} handleChoice={handleChoice}/>
      <textarea
        className="inp-sit"
        onChange={handleChange}
        value={name}
        type="text"
        autoFocus
      />
      <input className="btn-sit active" type="submit" value="Submit" />
    </form>
  );
};

export default AddTask;
