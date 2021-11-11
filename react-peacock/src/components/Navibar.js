import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import cart from '../images/cart.png';

function Navibar() {
    return (
        <div className="fixTop">
            <nav>
                <Container>
                    <Row>
                        <Col xs={2}>
                            <a href="#" className="logo">Logo</a>
                        </Col>
                        <Col xs={9}>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Product</a></li>
                            </ul>
                        </Col>
                        <Col xs={1}>
                            <img src={cart} alt="cart" className="cart-icon"/>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </div>
    )
}

export default Navibar


