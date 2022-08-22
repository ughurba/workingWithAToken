import React from "react";
import "./App.css";
import { Header } from "./components/layout/header";
import { AppRoutes } from "./Routes/routes";

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
