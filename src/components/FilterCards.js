import React from "react";
import SelectCathegory from "./SelectCathegory";

const FilterCards = ({ uniqueCathegories, handleChoice, selection }) => {


  return (
    <div>
      <p>
        Auswahl
        <SelectCathegory
          uniqueCathegories={uniqueCathegories}
          handleChoice={handleChoice}
          selection={selection}
        />
      </p>
    </div>
  );
};

export default FilterCards;
