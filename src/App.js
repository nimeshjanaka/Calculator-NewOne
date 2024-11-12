import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState("");

  // handle button click
  const handleClick = (value) => {
    // clear input
    if (value === "AC") {
      setCount("");
    }
    // calculate result
    else if (value === "=") {
      try {
        setCount(eval(count).toString());
      } catch {
        setCount("error");
      }
    } else {
      setCount(count + value);
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <h2>{count || "0"}</h2>
        </div>
        <div className="buttons">
          <button className="button" onClick={() => handleClick("AC")}>
            AC
          </button>
          <button className="button" onClick={() => handleClick("/")}>
            /
          </button>
          <button className="button" onClick={() => handleClick("%")}>
            %
          </button>
          <button className="button" onClick={() => handleClick("*")}>
            *
          </button>

          <button className="button" onClick={() => handleClick("7")}>
            7
          </button>
          <button className="button" onClick={() => handleClick("8")}>
            8
          </button>
          <button className="button" onClick={() => handleClick("9")}>
            9
          </button>
          <button className="button" onClick={() => handleClick("-")}>
            -
          </button>

          <button className="button" onClick={() => handleClick("4")}>
            4
          </button>
          <button className="button" onClick={() => handleClick("5")}>
            5
          </button>
          <button className="button" onClick={() => handleClick("6")}>
            6
          </button>
          <button className="button" onClick={() => handleClick("+")}>
            +
          </button>

          <button className="button" onClick={() => handleClick("1")}>
            1
          </button>
          <button className="button" onClick={() => handleClick("2")}>
            2
          </button>
          <button className="button" onClick={() => handleClick("3")}>
            3
          </button>
          <button className="button" onClick={() => handleClick("=")}>
            =
          </button>

          <button className="button" onClick={() => handleClick("#")}>
            #
          </button>
          <button className="button" onClick={() => handleClick("0")}>
            0
          </button>
          <button className="button" onClick={() => handleClick(".")}>
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
