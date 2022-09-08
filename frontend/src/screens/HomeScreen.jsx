<<<<<<< HEAD
import React, { Children, useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProduct] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/products", {
        headers: {
          Accept: "Application/json",
          "Content-Type": "Application/json"
        }
      })
      console.log('[data]', data)
      setProduct(data)
    }
    fetchProducts()
=======
import React, {useEffect, useState} from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios"

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products")

      setProducts(data)
    }
     fetchProducts()
>>>>>>> 618e1b34579cb796d6ca6440cc339dca91c78f66
  }, [])
  return (
    <main className="py-3">
      <Container>
        <h1>Latest Products</h1>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default HomeScreen;
