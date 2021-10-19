import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <h1>Keep in Touch With Us</h1>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control placeholder="Subject" />
                </Form.Group>
                <Row className="mb-3">
                    <Col>
                        <Form.Group className="mb-3" controlId="dob">
                            <Form.Label>Write Your Message Here</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="mb-3">
                    <Button className="w-25" variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Contact;