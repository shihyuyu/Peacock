import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import gura from '../images/gura.png'
import pekora from '../images/Pekora.png'
import korone from '../images/korone.png'

function LoginHomePage() {
    return (
        <div className='logged_in_homepage'>
            <div className='logged_in_homepage_wrapper container'>
                <div className='logged-in-homepage-top row'>
                    <div className='col-lg-3 col-md-3 col-sm-0'>
                        <div className='welcome-section'>
                            <div className='buyer-request'>
                                <span className='welcome-section-title'>Hi Peacock,</span>
                                <p>Get offers from sellers for your project</p>
                                <a href="...">Post a Request</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-9 col-md-9 col-sm-12'>
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
            </div>
        </div>
    )
}

export default LoginHomePage;