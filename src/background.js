import React, { useState } from "react";

const Background = () => {
  const [Color, setColor] = useState();
  const [TColor, setTColor] = useState();

  const BgGrey = () => {
    setColor("grey");
    setTColor("white");
  };
  const BgRed = () => {
    setColor("red");
    setTColor("white");
  };
  const BgOrange = () => {
    setColor("orange");
    setTColor("white");
  };
  const BgBlue = () => {
    setColor("blue");
    setTColor("white");
  };
  const BgGreen = () => {
    setColor("greenyellow");
    setTColor("black");
  };
  const BgPink = () => {
    setColor("pink");
    setTColor("black");
  };

  return (
    <>
      <div
        className="Full-bg"
        style={{ backgroundColor: Color, color: TColor }}
      >
        <h1>Change Text Color and Background Color</h1>
        <div className="buttons">
          <button onClick={BgGrey}>Grey</button>
          <button onClick={BgRed}>Red</button>
          <button onClick={BgOrange}>Orange</button>
          <button onClick={BgBlue}>Blue</button>
          <button onClick={BgGreen}>Green</button>
          <button onClick={BgPink}>Pink</button>
        </div>
      </div>
    </>
  );
};

export default Background;
