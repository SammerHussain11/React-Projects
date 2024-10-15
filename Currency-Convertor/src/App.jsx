import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./customHook/useCurrencyInfo";
import "./App.css";

function App() {
  // State variables
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("pkr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Custom hook to fetch currency information
  const currencyInfo = useCurrencyInfo(from);

  // Get currency options from the fetched data
  const options = Object.keys(currencyInfo);

  // Function to swap 'from' and 'to' currencies
  const swap = () => {
    setFrom(to);
    setTo(from);
    // Swap amounts
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // Function to perform currency conversion
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://media.istockphoto.com/id/1322201350/photo/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-on-the-stock-market.jpg?s=1024x1024&w=is&k=20&c=0h4cOcoSUslAF9JNqNZv_4dsLqEA3JxT5Vq-NlEDsSk=)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <h2 className="heading">Currency Convertor App</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* Input box for 'From' currency */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                // Handle currency change for 'From' currency
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                // Handle amount change for 'From' currency
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            {/* Button to swap currencies */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            {/* Input box for 'To' currency */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                // Handle currency change for 'To' currency
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                // Disable amount input for 'To' currency
                amountDisable={false}
              />
            </div>
            {/* Button to submit the conversion */}
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
}

export default App;
