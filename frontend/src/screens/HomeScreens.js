import React, { Children } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import Products from "../products";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeScreens = ({ children }) => {
  return (
    <>
      <Header />
      <main className="py-3">{children}</main>
      <Footer />
    </>
  );
};

export default HomeScreens;
