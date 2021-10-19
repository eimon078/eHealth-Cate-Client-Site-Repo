import React from 'react';
import './About.css'
import img from '../../Images/banner.jfif'
import Faq from './Faq/Faq';
import { Col, Container, Row } from 'react-bootstrap';
import Contact from './Contact/Contact';

const About = () => {
    return (
        <div>
            <div className="banner mb-5" style={{
                backgroundImage: `url(${img})`
            }}>
                <div className='position-relative top-50 text-white'>
                    <h1 className=''>Your Health is Our Priority</h1>
                    <p>We can manage your dream building A small river named Duden flows by their place</p>
                </div>
            </div>

            <Container className='mb-5'>
                <Row className="g-2">
                    <Col lg="6" md='12' className="border border-secondary">
                        <Faq></Faq>
                    </Col>
                    <Col lg="6" md='12' className="border border-secondary">
                        <Contact></Contact>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;