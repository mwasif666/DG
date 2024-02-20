import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Password.css";
const PasswordGenerator = () => {
  const [lenght, setLenght] = useState("8");
  const [numberAllowed, setNumberAllow] = useState(false);
  const [charAllowed, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const [UpperCase, setUpperCase] = useState(false);
  const [LowerCase, setLowerCase] = useState(false);
  const PasswordRef = useRef(null);

  const PasswordGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (UpperCase && LowerCase) {
      str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    } else if (UpperCase) {
      str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      str = "abcdefghijklmnopqrstuvwxyz";
    }
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~`";
    }
    for (var i = 1; i <= lenght; i++) {
      var charact = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charact);
    }
    setPassword(pass);
  }, [lenght, numberAllowed, charAllowed, setPassword, UpperCase, LowerCase]);

  const PasswordCopy = useCallback(() => {
    PasswordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    PasswordGenerate();
  }, [
    lenght,
    numberAllowed,
    PasswordGenerate,
    charAllowed,
    UpperCase,
    LowerCase,
  ]);

  return (
    <>
      <div className="password-background">
        <h1 className="text-5xl text-center py-10 font-black font-mono  ">
          Password Generator
        </h1>

        <div className="pasword-screen flex items-center justify-center">
          <div className="input-field">
            <input
              type="text"
              className="rounded-l-lg border-0 w-80 input-text"
              value={password}
              ref={PasswordRef}
            />
            <button
              onClick={PasswordCopy}
              className="bg-slate-100 text-black py-2 px-6 rounded-r-lg border-0"
            >
              Copy
            </button>
            <div className="Range flex gap-5 items-center pt-5">
              <input
                type="range"
                name=""
                id="RangeSelect"
                min={8}
                max={20}
                value={lenght}
                onChange={(e) => setLenght(e.target.value)}
              />
              <label htmlFor="RangeSelect">Length:{lenght}</label>
              <input
                type="checkbox"
                name=""
                id="NumberSelect"
                onChange={() => setNumberAllow((prev) => !prev)}
              />
              <label htmlFor="NumberSelect">Number</label>
              <input
                type="checkbox"
                name=""
                id="CharSelect"
                onChange={() => setUpperCase((prev) => !prev)}
              />
              <label htmlFor="CharSelect">Upper Case</label>
              <input
                type="checkbox"
                name=""
                id="CharSelect"
                onChange={() => setLowerCase((prev) => !prev)}
              />
              <label htmlFor="CharSelect">Lower Case</label>
              <input
                type="checkbox"
                name=""
                id="CharSelect"
                onChange={() => setCharAllow((prev) => !prev)}
              />
              <label htmlFor="CharSelect">Special Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
