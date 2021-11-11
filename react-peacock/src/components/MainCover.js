import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import dribble from '../images/dribble.png';
import telegram from '../images/telegram.png';
import instagram from '../images/instagram.png';

function MainCover() {
    return (
        <div className="mainCover">
            <Container className="bgWrapper">
                <div className="text-box">
                    <p>Hi</p>
                    <h2>Kon Peko</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                    <Row className="btn-box">
                        <Col xs={4}>
                            <a href="#">Explore My Website</a>
                            <a href="#">Connect With Me</a>
                        </Col>
                        <Col xs={6}>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.</span>
                        </Col>
                    </Row>
                </div>
                <div className="social-icon">
                    <a href="#"><img src={dribble} /></a>
                    <a href="#"><img src={telegram} /></a>
                    <a href="#"><img src={instagram} /></a>
                </div>
            </Container>
        </div>
    )
}

export default MainCover
