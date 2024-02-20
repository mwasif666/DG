import React, { useState } from "react";
// import Cards from "./cards";
import "./App.css";
// import State from "./State";
// import Calculator from "./Calculator";
// import Background from "./background";
// import PasswordGenerator from "./PasswordGenerator";

// Currency Project start

import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyHook";

// Currency Project End

const App = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [converteAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(converteAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  {
    /* <Cards
        name="Wasif"
        paragraph="Electronic devices, ubiquitous in modern life, seamlessly connect us. From smartphones to smart homes, they streamline tasks, entertain, and foster communication, shaping our interconnected world."
      />
      <Cards
        name="Fazal"
        paragraph="Electronic devices, ubiquitous in modern life, seamlessly connect us. From smartphones to smart homes, they streamline tasks, entertain, and foster communication, shaping our interconnected world."
      /> */
  }
  {
    /* <State /> */
  }
  {
    /* <Calculator /> */
  }
  {
    /* <Background /> */
  }
  {
    /* <PasswordGenerator /> */
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={converteAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
