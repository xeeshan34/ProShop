import React, { Children } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import Products from "../products";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutScreens = ({ children }) => {
  return (
    <div>
      <Header />
        {children}
      <Footer />
    </div>
  );
};

export default LayoutScreens;
