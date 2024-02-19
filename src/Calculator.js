import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const handleCalculate = () => {
    setDisplay(eval(display));
  };

  const handleClear = () => {
    setDisplay("");
  };

  return (
    <div className="calculator">
      <input type="text" value={display} readOnly />
      <div className="buttons">
        {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", 0, ".", "/"].map(
          (item, index) => (
            <button key={index} onClick={() => handleClick(item)}>
              {item}
            </button>
          )
        )}
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;
