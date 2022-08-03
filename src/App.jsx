import Navbar from "./components/Navbar";
import AppRouter from "./AppRouter";

import React from "react";
import "./App.css";


function App() {
  return (
    <div>
    <AppRouter />
      <Navbar />
      </div>
  );
}

export default App;