import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(11);

  const addValue = () => {
    console.log("Clicked ", counter);
    setCounter(counter + 1);
  };

  const removeValue = () => {
    console.log("Clicked ", counter);
    if (counter <= 0) {
      return 0;
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <div className="card">
        <div className="heading">
          <h2>Counter Value: {counter}</h2>
        </div>
        <div className="btn">
          <button type="button" className="btn btn-success" onClick={addValue}>
            Add value
          </button>
          <br />
          <br />
          <button
            type="button"
            className="btn btn-danger"
            onClick={removeValue}
          >
            Remove value
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
