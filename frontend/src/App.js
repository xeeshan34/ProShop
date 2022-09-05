import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreens";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        {/* <main className="py-3"> */}
        <Route path="/" index element={<HomeScreen />} />
        {/* </main> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
