import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import gura from '../images/gura.png'
import pekora from '../images/Pekora.png'
import korone from '../images/korone.png'

class MidBanner extends Component {
    render() {
        return (
            <div className="mid-banner-carousel container">
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={gura}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={pekora}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={korone}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default MidBanner
