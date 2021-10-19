import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const servises = useServices();
    return (
        <div>
            <Container>
                <h1 className="mt-5 mb-3 text-primary">Our Services</h1>
                <Row xs={1} md={3} className="g-4">
                    {
                        servises.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;