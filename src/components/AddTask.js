import React, { useState } from "react";

const AddTask = ({ addTask, uniqueCathegories }) => {
  
  const [name, setName] = useState("");
  const [selection, setSelection] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    addTask(name, selection);
    setName(" ");
    event.preventDefault();
  };

  const handleChoice = (event) => {
    setSelection(event.target.value);
  };

  return (
    <div className="addTask">
      <form onSubmit={handleSubmit}>
        <select
          className="Dropdownlist"
          onChange={handleChoice}
          id="cathegory"
          name="cathegory"
        >
          {uniqueCathegories &&
            uniqueCathegories.map((cat) => <option value={cat}>{cat}</option>)}
        </select>
        <textarea
          id="NotToDo"
          onChange={handleChange}
          value={name}
          type="text"
          autoFocus
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddTask;
