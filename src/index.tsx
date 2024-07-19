import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";

console.log(import.meta.env.VITE_TEST);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
