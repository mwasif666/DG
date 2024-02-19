import React, { useState } from "react";

const State = () => {
  const [changeState, setChnageState] = useState(0);

  const increaseValue = () => {
    setChnageState(changeState + 1);
  };
  const decreaseValue = () => {
    setChnageState(changeState - 1);
  };
  const zeroValue = () => {
    setChnageState(changeState * 0);
  };

  return (
    <>
      <input type="number" value={changeState} />
      <br />
      <button onClick={increaseValue}>ADD (+)</button> <br />
      <button onClick={decreaseValue}>Minus (-)</button> <br />
      <button onClick={zeroValue}>Zero Value</button> <br />
    </>
  );
};

export default State;
