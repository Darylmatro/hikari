// src/App.jsx
import React from "react";
import AppRouter from "./routes/Router";

const App = () => {
  return (
    <div className="App bg-black text-white min-h-screen">
      <AppRouter />
    </div>
  );
};

export default App;
