import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [lenght, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~`";
    }
      for (var i = 1; i <= lenght; i++) {
        var char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }
      setPassword(pass);
    }, [lenght, setPassword, numberAllowed, charAllowed]);

  const PasswordCopy = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current.setSelectionRange(0, 18);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [lenght, passwordGenerator, numberAllowed, charAllowed]);

  return (
    <>
      <h1>Password Generator</h1>

      <div className="input-field">
        <input type="text" id="InputRead" value={password} ref={passwordRef} />
      </div>
      <div className="allbuttons">
        <div className="slider">
          <input
            type="range"
            name=""
            id="Range"
            min={1}
            max={20}
            value={lenght}
            onChange={(e) => setLenght(e.target.value)}
          />
          <label htmlFor="Range">lenght: {lenght}</label>
        </div>
        <button className="" onClick={PasswordCopy}>
          Copy
        </button>
        <div className="slider">
          <input
            type="checkbox"
            name=""
            id="checkboxNumber"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="checkboxNumber">Number</label>
        </div>
        <div className="slider">
          <input
            type="checkbox"
            name=""
            id="checkboxChar"
            defaultChecked={charAllowed}
            onChange={() => setcharAllowed((prev) => !prev)}
          />
          <label htmlFor="checkboxChar">Speacial character</label>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
