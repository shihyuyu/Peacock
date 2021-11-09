import React from 'react';
import {Container, Row, Col, Nav, Navbar} from "react-bootstrap";
// import Navbar from 'react-bootstrap/Navbar';

function Navibar() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={4}>logo</Col>
                    <Col xs={8}>
                        <Navbar variant="light">
                            <Container>
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#features">Features</Nav.Link>
                                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Navibar


