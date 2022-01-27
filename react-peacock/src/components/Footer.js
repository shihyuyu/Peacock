import React, { Component } from 'react'
import logo from '../images/Fiverr-Logo.png';
import './Fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Footer extends Component {
    render() {
        return (
            <div id="main-page-footer">
                <footer className='site-footer'>
                    <div className='footer-wrapper container'>
                        <div className='row'>
                            <div className='categories list-wrapper col-3'>
                                <h5>Categories</h5>
                                <ul>
                                    <li><a href="...">Graphics & Design</a></li>
                                    <li><a href="...">Digital Marketing</a></li>
                                    <li><a href="...">Writing & Translation</a></li>
                                </ul>
                            </div>
                            <div className='about list-wrapper col-3'>
                                <h5>About</h5>
                                <ul>
                                    <li><a href="...">Graphics & Design</a></li>
                                    <li><a href="...">Digital Marketing</a></li>
                                    <li><a href="...">Writing & Translation</a></li>
                                </ul>
                            </div>
                            <div className='support list-wrapper col-3'>
                                <h5>Support</h5>
                                <ul>
                                    <li><a href="...">Graphics & Design</a></li>
                                    <li><a href="...">Digital Marketing</a></li>
                                    <li><a href="...">Writing & Translation</a></li>
                                </ul>
                            </div>
                            <div className='community list-wrapper col-3'>
                                <h5>Community</h5>
                                <ul>
                                    <li><a href="...">Graphics & Design</a></li>
                                    <li><a href="...">Digital Marketing</a></li>
                                    <li><a href="...">Writing & Translation</a></li>
                                </ul>
                            </div>
                            <div className='more-from-fiverr list-wrapper col-3'>
                                <h5>More From Fiverr</h5>
                                <ul>
                                    <li><a href="...">Graphics & Design</a></li>
                                    <li><a href="...">Digital Marketing</a></li>
                                    <li><a href="...">Writing & Translation</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-wrapper container'>
                        <div className='row'>
                            <div className='bottom-left col-lg-8 col-md-4 col-sm-12'>
                                <img src={logo} />
                                <p>© Fiverr International Ltd. 2022</p>
                            </div>
                            <div className='bottom-right col-lg-4 col-md-4 col-sm-12'>
                                <ul>
                                    <li><a href="..."><FontAwesomeIcon icon={['fab', 'facebook-square']} size={['2x']} /></a></li>
                                    <li><a href="..."><FontAwesomeIcon icon={['fab', 'instagram-square']} size={['2x']} /></a></li>
                                    <li><a href="..."><FontAwesomeIcon icon={['fab', 'twitter']} size={['2x']} /></a></li>
                                    <li><a href="..."><FontAwesomeIcon icon={['fab', 'youtube']} size={['2x']} /></a></li>
                                </ul>
                            </div>
                        </div>                        
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
