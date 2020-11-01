import React from "react";

const SelectCathegory = ({ uniqueCathegories, handleChoice, selection }) => {

  const renderColor = (Cat) => {
    switch (Cat) {
      case "Familie":
        return "select yellow";
      case "Haushalt":
        return "select green";
      case "Urlaub":
        return "select purple";
      case "Selbstoptimierung":
        return "select green";
      case "Lohnarbeit":
        return "select green";
      case "Liebesleben":
        return "select purple";
      case "Freizeit":
        return "select red";
      case "Finanzen":
        return "select yellow";
      case "sonstso":
        return "select purple";
      default:
        return "select yellow";
    }
  };

  return (
    <>
    <select
      className={renderColor(selection)}
      onChange={(event) => handleChoice(event)}
      id="cathegory"
      name="cathegory"
    >
      <option value={'keine Kategorie wählen'} >alle</option>
      {uniqueCathegories &&
        uniqueCathegories.map((cat) => <option key={cat} value={cat} selected={selection === cat && 'selected'}>{cat}</option>)}
    </select>
    </>
  );
};

export default SelectCathegory;
