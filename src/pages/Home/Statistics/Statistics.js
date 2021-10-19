import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Row } from 'react-bootstrap';
import { faHospital, faUsers, faSmile, faBed } from '@fortawesome/free-solid-svg-icons';

const Statistics = () => {
    return (
        <div className="mt-5 mb-5">
            <h1 className="text-primary">Our Success</h1>
            <Container className="mt-5 mb-5">
                <Row>
                    <Col>
                        <h3 className="text-primary"><FontAwesomeIcon icon={faHospital} /></h3>
                        <h2>2+</h2>
                        <p>Have Hospitals</p>
                    </Col>
                    <Col>
                        <h3 className="text-primary"><FontAwesomeIcon icon={faUsers} /></h3>
                        <h2>100+</h2>
                        <p>Stuff</p>
                    </Col>
                    <Col>
                        <h3 className="text-primary"><FontAwesomeIcon icon={faSmile} /></h3>
                        <h2 >1800+</h2>
                        <p>Happy Patient</p>
                    </Col>
                    <Col>
                        <h3 className="text-primary"><FontAwesomeIcon icon={faBed} />+</h3>
                        <h2>40+</h2>
                        <p>Bed Facility</p>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Statistics;