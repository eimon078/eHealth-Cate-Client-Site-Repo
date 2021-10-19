import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const servises = useServices();
    return (
        <div>
            <Container>
                <h1 className="mt-5 mb-3 text-primary">Our Specialist Doctors Panel</h1>
                <Row xs={1} md={3} className="g-4">
                    {
                        servises.map(service => <Doctor
                            key={service.id}
                            doctor={service?.doctor}
                            field={service.name}
                        ></Doctor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;