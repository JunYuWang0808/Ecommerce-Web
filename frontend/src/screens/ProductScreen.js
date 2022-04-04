import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card, ListGroupItem} from 'react-bootstrap'
import Rating from "../components/Rating";
import products from "../products";
import {useParams} from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";


function ProductScreen( ) {
    let {id} = useParams();
    // const product = products.find((p) => p._id === id)
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchProducts() {

            // eslint-disable-next-line no-template-curly-in-string
            console.log(`/api/product/${id}`)
            const {data} = await axios.get(`/api/product/${id}`)
            setProduct(data)
        }

        fetchProducts()

    }, [])

    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant={"flush"}>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: ${product.description}
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
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

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
                                <Button className='btn-block' disabled={product.countInStock == 0}  type={"button"}>Add to Cart</Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>

        </div>

    )
}

export default ProductScreen