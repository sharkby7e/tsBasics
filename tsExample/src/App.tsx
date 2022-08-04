import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextField } from "./TextField";
import { ReducerExample } from "./ReducerEXample";
import { Counter } from "./Counter";

const App: React.FC = () => {
  return (
    <div>
      {/* <TextField */}
      {/*   text="something" */}
      {/*   ok={true} */}
      {/*   i={5} */}
      {/*   fn={(bob) => bob.toLowerCase()} */}
      {/*   person={{ firstName: "Sid", lastName: "Quinsaat" }} */}
      {/*   handleChange={(e) => { */}
      {/*     console.log(e.target.value); */}
      {/*   }} */}
      {/* /> */}
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>
              Click to Increase
            </button>
          </div>
        )}
      </Counter>
      yo
    </div>
  );
};

export default App;
