import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  function addValue() {
    counter = counter + 1;
    setCounter(counter);
  }

  function subValue() {
    counter = counter - 1;
    setCounter(counter);
  }

  return (
    <>
      <div>
        <h2>Hooks value upadatation on UI</h2>
      </div>
      <div>
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
    </>
  );
}

export default App;
