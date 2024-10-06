import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("bg-olive-500");

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
  ];

  return (
    <div className={`w-full h-screen duration-200 ${color}`}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-2xl p-4">
          {/* {colors.map((colorClass) => (
            <button
              key={colorClass}
              className={`outline-none px-4 py-2 rounded ${colorClass} text-white`}
              onClick={() => setColor(colorClass)}
            >
              {colorClass.replace("bg-", "").replace("-500", "")}
            </button>
          ))} */}
          <button
            className={`outline-none px-4 py-2 rounded bg-red-500 text-white`}
            onClick={() => setColor("bg-red-500")}
          >
            Red
          </button>
          <button
            className={`outline-none px-4 py-2 rounded bg-blue-500 text-white`}
            onClick={() => setColor(" bg-blue-500")}
          >
            Blue
          </button>
          <button
            className={`outline-none px-4 py-2 rounded bg-green-500 text-white`}
            onClick={() => setColor("bg-green-500")}
          >
            Green
          </button>
          <button
            className={`outline-none px-4 py-2 rounded bg-orange-500 text-white`}
            onClick={() => setColor("bg-orange-500")}
          >
            Orange
          </button>
          <button
            className={`outline-none px-4 py-2 rounded bg-yellow-500 text-white`}
            onClick={() => setColor("bg-yellow-500")}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
