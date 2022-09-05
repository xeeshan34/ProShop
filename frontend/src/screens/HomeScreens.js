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
      <main className="py-3">
        {/* <Container>
          <h1>Latest Products</h1>
          <Row>
            {Products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
         */}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default HomeScreens;
