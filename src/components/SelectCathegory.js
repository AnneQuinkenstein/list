import React from "react";

const SelectCathegory = ({ uniqueCathegories, handleChoice }) => {
  return (
    <select
      className="postit-title"
      onChange={handleChoice}
      id="cathegory"
      name="cathegory"
    >
      <option value={'keine Kategorie wählen'}>Kategorie</option>
      {uniqueCathegories &&
        uniqueCathegories.map((cat) => <option value={cat}>{cat}</option>)}
    </select>
  );
};

export default SelectCathegory;
