import React from 'react';
import Form from 'react-bootstrap/Form';
import logo from '../images/Fiverr-Logo.png';

function Header() {
    return (
        <div className="header-non-fixed">
            <header>
                <div className="header-row-wrapper container">
                    <div className="header-row row">
                        <button className="btn-navicon"></button>
                        <div className='logo-wrapper col-lg-1'>
                            <a href="#"><img src={logo} /></a>
                        </div>
                        <div className="search-wrapper col-lg-5">
                            <div>
                            <Form>
                                <Form.Group>
                                    <Form.Control type="search" placeholder="Find services" />
                                    <button className="search-submit"><a>Search</a></button>
                                </Form.Group>
                            </Form>
                            </div>
                        </div>
                        <nav className="fiverr-nav col-lg-6">
                            <ul>
                                <li><a href="#">Fiverr Pro</a></li>
                                <li><a href="#">Fiverr Business</a></li>
                                <li><a href="#">Explore</a></li>
                                <li><a href="#">Messages</a></li>
                                <li><a href="#">Lists</a></li>
                                <li><a href="#">Orders</a></li>
                                <li>
                                    <div>
                                        <span>
                                            <button>
                                                <a>Y</a>
                                            </button>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header


