import React, { useState } from "react";
import SelectCathegory from "./SelectCathegory";

const AddTask = ({ addTask, uniqueCathegories, handleChoice, selection}) => {
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

  const renderColor = (Cat) => {
    switch (Cat) {
      case "Familie":
        return "addTask yellow";
      case "Haushalt":
        return "addTask green";
      case "Urlaub":
        return "addTask purple";
      case "Selbstoptimierung":
        return "addTask green";
      case "Lohnarbeit":
        return "addTask green";
      case "Liebesleben":
        return "addTask purple";
      case "Freizeit":
        return "addTask red";
      case "Finanzen":
        return "addTask yellow";
      case "sonstso":
        return "addTask purple";
      default:
        return "addTask yellow";
    }
  };
  
  return (
    <>
    <SelectCathegory uniqueCathegories={uniqueCathegories} handleChoice={handleChoice} selection={selection}/>
    <div className={renderColor(selection)}>
   
    <form  onSubmit={handleSubmit}>
     <p>Füge Not-To-Dos zur ausgewählten Kategorie:</p> 
      <textarea
        className="inp-sit"
        onChange={handleChange}
        value={name}
        type="text"
        autoFocus
      />
      <input className="btn-sit active" type="submit" value="Pin!" />
    </form>
    </div>
    </>
  );
};

export default AddTask;
