import React from "react";
import SelectCathegory from "./SelectCathegory";

const FilterCards = ({ uniqueCathegories, filterChoice }) => {
  const handleChoice = (event) => {
    filterChoice(event.target.value);
  };

  return (
    <div>
      <p>
        Auswahl
        <SelectCathegory
          uniqueCathegories={uniqueCathegories}
          handleChoice={handleChoice}
        />
      </p>
    </div>
  );
};

export default FilterCards;
