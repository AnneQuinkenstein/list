import React from "react";

const SelectCathegory = ({ uniqueCathegories, handleChoice, selection }) => {

  return (
    <>
    <select
      className="postit-title"
      onChange={(event) => handleChoice(event)}
      id="cathegory"
      name="cathegory"
    >
      <option value={'keine Kategorie wählen'} >Kategorie</option>
      {uniqueCathegories &&
        uniqueCathegories.map((cat) => <option key={cat} value={cat} selected={selection === cat && 'selected'}>{cat}</option>)}
    </select>
    </>
  );
};

export default SelectCathegory;
