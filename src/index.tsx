import React from "react";
import * as ReactDOM from "react-dom/client";

import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);
root.render(<App />);
