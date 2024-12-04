import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Rendu de l'application dans l'élément avec l'id 'root'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
