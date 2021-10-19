import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const Appointment = () => {
    return (
        <div className="w-100 bg-secondary text-white" style={{ height: '100vh' }}>
            <div> <h1 className="mb-5 pt-5">This is Appoinment</h1></div>
            <Container>
                <Form>
                    <Row className='mb-3 justify-content-center'>
                        <Col lg="4">
                            <Form.Label>Enter Your Full Name</Form.Label>
                            <Form.Control placeholder="Full Name" />
                        </Col>
                        <Col lg="4">
                            <Form.Label>Enter Your Phone</Form.Label>
                            <Form.Control type='phone' placeholder="Phone" />
                        </Col>
                    </Row>
                    <Row className='mb-2 justify-content-center'>
                        <Col lg="4">
                            <Form.Label>Enter Your Email</Form.Label>
                            <Form.Control placeholder="Email" />
                        </Col>
                        <Col lg="4">
                            <Form.Label>Make an Appointment</Form.Label>
                            <Form.Control type='date' placeholder="Make an Appointment" onfocus="(this.type=date)" />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg="8">
                            <Form.Group className="mb-3" controlId="dob">
                                <Form.Label>Write Your Message Here</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button className='w-25'>Submit</Button>
                </Form>
            </Container>
        </div>
    );
};

export default Appointment;