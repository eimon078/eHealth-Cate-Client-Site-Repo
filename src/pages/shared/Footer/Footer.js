import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
import { faMobile, faEnvelope, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="bg-light m-2 p-3 pb-5">
            <Container>
                <Row>
                    <Col>
                        <h4>Quick Links</h4>
                        <ul className="footer-link">
                            <li><Link className="text-decoration-none text-body me-5" to="/home">Home</Link></li>
                            <li><Link className="text-decoration-none text-body me-5" to="/appointment">Appointment</Link></li>
                            <li><Link className="text-decoration-none text-body me-5" to="/about">About</Link></li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>Follow Us</h4>
                        <ul className="footer-link">
                            <li><Link className="text-decoration-none text-body me-5" to="/facebook">Facebook</Link></li>
                            <li><Link className="text-decoration-none text-body me-5" to="/twitter">Twitter</Link></li>
                            <li><Link className="text-decoration-none text-body me-5" to="/instagram">Instagram</Link></li>
                            <li><Link className="text-decoration-none text-body me-5" to="/linkedin">Linkedin</Link></li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>Contact Us</h4>
                        <div>
                            <p className="mb-0"><span className="text-primary p-1"><FontAwesomeIcon icon={faMobile} /></span>+880 123-456-7890</p>
                            <p className="mb-0"><span className="text-primary p-1"><FontAwesomeIcon icon={faEnvelope} /></span> example@gmail.com</p>
                            <p className="mb-0"><span className="text-primary p-1"><FontAwesomeIcon icon={faLocationArrow} /></span> Lakshmipur Sadar, Lakshmipur</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;