import React, { useState } from "react";
import Card from "./Card";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const subValue = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
        <h2>Hooks value upadatation on UI</h2>
      </div>
      <div className="text-center">
        <h1 className="bg">Tailwind Classes</h1>
        <h1>{counter}</h1>
        <button id="add" onClick={addValue}>
          Add + {counter}
        </button>
        <br />
        <br />
        <button id="sub" onClick={subValue}>
          Decrease - {counter}
        </button>
      </div>
      <h3>Footer : {counter}</h3>
      <Card userName="Harsh Singh" />
      <Card userName="Another User" />
    </div>
  );
}

export default App;
