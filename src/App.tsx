import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Variables from "./pages/Variables";
import VariableID from "./pages/VariableID";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <div className="app-container">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abp-vin-decoder/variables" element={<Variables />} />
        <Route path="/abp-vin-decoder/variable/:id" element={<VariableID />} />
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </div>
  );
};

export default App;
