import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Doctor = ({ doctor, field }) => {
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={doctor?.img} style={{ height: '300px' }} />
                    <Card.Body>
                        <Card.Title>{doctor?.name}</Card.Title>
                        <Card.Text>
                            {field} Specialist.
                        </Card.Text>
                    </Card.Body>
                    <Button>Book Now</Button>
                </Card>
            </Col>
        </div>
    );
};

export default Doctor;