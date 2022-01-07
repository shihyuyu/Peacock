import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import small_ame from '../images/small_ame.png'
import takodachi from '../images/takodachi.png'

function PopularGigsSlide() {
    return (
        <div>
            <div className="popular-gigs-slides container">
                <h4>Most popular Gigs</h4>
                <Carousel interval={ null }>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={small_ame} />
                            <Card.Body>
                                <Card.Title>Small Ame</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={takodachi} />
                            <Card.Body>
                                <Card.Title>Takodachi</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default PopularGigsSlide
