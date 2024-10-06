import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);

  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";

    if (isNumber) str += "0123456789";
    if (isChar) str += "!@#$%^&*()_+[]{}|;:',.<>?/~`-=";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * password.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isNumber, isChar, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumber, isChar, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800">
        <h1 className="text-2xl text-center text-white my-3">
          Password Genertor
        </h1>
        <div className="flex shadow rounded-lg overflow-hideen mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 rounded-lg"
            placeholder="Password..."
            readOnly={true}
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg ml-4"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 text-white">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={6}
              max={100}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="">Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumber}
              id="numberInput"
              onChange={() => {
                setIsNumber((prev) => !prev);
              }}
            />{" "}
            <label htmlFor=""> Number </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumber}
              id="numberInput"
              onChange={() => {
                setIsChar((prev) => !prev);
              }}
            />{" "}
            <label htmlFor=""> Charecture </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
