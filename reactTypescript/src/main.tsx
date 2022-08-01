import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Types from "./1-types";
import Hooks from "./2-hooks";
import Network from "./3-network";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Network />
  </React.StrictMode>
);
