import React from "react";
import { useId } from "@react-aria/utils";

function InputBox({
  label, // Label for the input field
  amount, // Amount value
  onAmountChange, // Function to handle amount change
  onCurrencyChange, // Function to handle currency change
  currencyOptions = [], // Array of currency options
  selectCurrency = "usd", // Selected currency
  amountDisable = false, // Flag to disable amount input
  currencyDisable = false, // Flag to disable currency selection
  className = "", // Additional class name for styling
}) {
  // Generate a unique ID for the input field
  const amountInputId = useId(); // Assuming `useId` is imported from react

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {/* Section for entering the amount */}
      <div className="w-1/2">
        {/* Label for the amount input */}
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        {/* Input field for entering the amount */}
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      {/* Section for selecting the currency */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        {/* Label for the currency selection */}
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        {/* Dropdown for selecting the currency */}
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {/* Map through currency options to generate dropdown options */}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
