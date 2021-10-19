import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const Details = () => {
    const services = useServices()
    console.log(services);
    const [details, setDetails] = useState({})
    const { detailsId } = useParams();

    useEffect(() => {
        let findService = services.find(service => parseInt(service.id) === parseInt(detailsId));
        setDetails(findService);
    }, [services, detailsId]);

    const cardimg = {
        width: '100%',
        height: "200px"
    }
    return (
        <div>
            <h1 className="mt-3">Details of Service {detailsId}</h1>
            <Container>
                <Row className="justify-content-center">
                    <Col lg="6">
                        <Card>
                            <Card.Img variant="top" src={details?.img} style={cardimg} />
                            <Card.Body>
                                <Card.Title>{details?.name}</Card.Title>
                                <Card.Text>
                                    {details?.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h1 className="mt-4 mb-3"> Our  {details?.name} Specialist Doctor</h1>
                <Row className="justify-content-center">
                    <Col lg="4">
                        <Card>
                            <Card.Img variant="top" src={details?.doctor?.img} />
                            <Card.Body>
                                <Card.Title>{details?.doctor?.name}</Card.Title>
                                <Card.Text>
                                    {details?.name} Specialist.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Details;