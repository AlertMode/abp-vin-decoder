import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Variables from "./pages/Variables";
import VariableID from "./pages/VariableID";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/variables" element={<Variables />} />
        <Route path="/variable/:id" element={<VariableID />} />
      </Routes>
    </div>
  );
};

export default App;
