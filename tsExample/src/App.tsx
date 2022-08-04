import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextField } from "./TextField";

const App: React.FC = () => {
  return (
    <div>
      <TextField
        text="something"
        ok={true}
        i={5}
        fn={(bob) => bob.toLowerCase()}
        person={{ firstName: "Sid", lastName: "Quinsaat" }}
      />
      yo
    </div>
  );
};

export default App;
