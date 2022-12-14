import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { Container, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import { baseUrl } from '../components/baseUrl'

const ProductScreens = () => {
  const params = useParams()
  console.log(params.id);
  const [product, setProduct] = useState([])
  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get(`${baseUrl}api/products/${params.id}`)
      console.log("Data",data)
      setProduct(data)
    }
    fetchProduct()
  }, [])

  return (
    <main className="py-3">
      <Container>
          <Link className='btn btn-light' to='/'>Go Back</Link>
          <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid/>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
              </ListGroup.Item>
              <ListGroup.Item>
                Price:${product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>
                    Price:
                    </Col>
                    <Col><strong>${product.price}</strong></Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>
                    Status:
                    </Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button className='btn-block' type='button' disabled={product.countInStock === 0}> Add to Cart </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
      </main>
  )
}

export default ProductScreens