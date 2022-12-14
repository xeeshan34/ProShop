import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutScreen from "./screens/LayoutScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreens";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutScreen children={<HomeScreen />} />} />
        <Route
          path="/product/:id"
          element={<LayoutScreen children={<ProductScreen />} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
