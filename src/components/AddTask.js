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
    <form className="addTask" onSubmit={handleSubmit}>
      <select
        className="postit-title"
        onChange={handleChoice}
        id="cathegory"
        name="cathegory"
      >
        <option>Choose Cathegory</option>
        {uniqueCathegories &&
          uniqueCathegories.map((cat) => <option value={cat}>{cat}</option>)}
      </select>
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
