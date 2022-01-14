import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import small_ame from '../images/small_ame.png'
import takodachi from '../images/takodachi.png'

class GigsRecommendation extends Component {
    render() {
        return (
            <div>
                <div className="gigs-recommendation container">
                    <h4>Gigs you may like</h4>
                    <div className="listing-impression-container">
                        <Card className="gigs-recommendation-card">
                            <Card.Img variant="top" src={small_ame} />
                            <Card.Body>
                                <Card.Title>Small Ame</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="gigs-recommendation-card">
                            <Card.Img variant="top" src={takodachi} />
                            <Card.Body>
                                <Card.Title>Takodachi</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="gigs-recommendation-card">
                            <Card.Img variant="top" src={takodachi} />
                            <Card.Body>
                                <Card.Title>Takodachi</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="gigs-recommendation-card">
                            <Card.Img variant="top" src={takodachi} />
                            <Card.Body>
                                <Card.Title>Takodachi</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="gigs-recommendation-card">
                            <Card.Img variant="top" src={takodachi} />
                            <Card.Body>
                                <Card.Title>Takodachi</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="gigs-recommendation-card">
                            <Card.Img variant="top" src={takodachi} />
                            <Card.Body>
                                <Card.Title>Takodachi</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default GigsRecommendation
