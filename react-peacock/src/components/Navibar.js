import React from 'react';
import {Container, Row, Col, Nav, Navbar} from "react-bootstrap";

function Navibar() {
    return (
        <div className="fixTop">
            <Container>
                <Row>
                    <Col xs={4}>
                        <a href="#" className="logo">Logo</a> 
                    </Col>
                    <Col xs={8}>
                        <Navbar  className="navigation" variant="light">
                            <Container>
                                <Nav>
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#features">About</Nav.Link>
                                    <Nav.Link href="#pricing">Work</Nav.Link>
                                    <Nav.Link href="#contact">Contact</Nav.Link>
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


