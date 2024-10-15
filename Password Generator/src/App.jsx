import React, { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [Length, setLength] = useState(8); // Password length state
  const [numAllowed, setNumAllowed] = useState(false); // State for including numbers
  const [charAllowed, setCharAllowed] = useState(false); // State for including special characters
  const [Password, setPassword] = useState(""); // Generated password state
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State to toggle password visibility
  const inputRef = useRef(null); // Reference to the password input field

  // Function to generate a password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_+=[]{}|;:',.<>?/";
    for (let i = 0; i < Length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [Length, charAllowed, numAllowed]);

  // Effect to generate password when options change
  useEffect(() => {
    passwordGenerator();
  }, [Length, numAllowed, charAllowed, passwordGenerator]);

  // Function to handle copying password to clipboard
  const handleCopy = () => {
    inputRef.current.select();
    navigator.clipboard.writeText(Password);
    window.alert("Password copied to clipboard!"); // Pop-up message
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  // Function to reload the page and reset input
  const reloadPage = () => {
    setPassword(""); // Reset password input
    setLength(8); // Reset length to default
    setNumAllowed(false); // Reset number checkbox
    setCharAllowed(false); // Reset character checkbox
  };

  return (
    <div className="container">
      <div className="card">
        <h1 id="heading">Password Generator</h1>
        <div className="input-container">
          <input
            type={isPasswordVisible ? "text" : "password"}
            value={Password}
            ref={inputRef}
            className="input-field"
            placeholder="Password"
          />
          <button
            className="btn btn-visibility"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? "Hide" : "Show"}
          </button>
          <button className="btn btn-copy" onClick={handleCopy}>
            Copy
          </button>
        </div>
        <div className="controls">
          <button className="btn btn-generate" onClick={passwordGenerator}>
            Generate Password
          </button>
          <div className="options">
            <div className="range-container">
              <input
                type="range"
                min={6}
                max={20}
                value={Length}
                className="range-input"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {Length}</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                checked={numAllowed}
                id="numberInput"
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Number</label>
              <input
                type="checkbox"
                checked={charAllowed}
                id="characterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="characterInput">Character</label>
            </div>
          </div>
        </div>
        <button className="btn btn-reload" onClick={reloadPage}>
          Reload Page
        </button>
      </div>
    </div>
  );
}

export default App;
