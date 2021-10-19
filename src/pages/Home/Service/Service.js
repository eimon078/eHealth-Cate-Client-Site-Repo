import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const cardimg = {
        width: '100%',
        height: "200px"
    }
    const { id, name, description, img } = service;
    return (
        <div>
            <Col className="h-100">
                <Card>
                    <Card.Img variant="top" src={img} style={cardimg} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 100)}...
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={`/service/${id}`}><Button className="w-75">View More</Button></Link>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Service;