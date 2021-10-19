import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Faq = () => {
    return (
        <div>
            <h1 className='mt-2 mb-3'>Frequently Asked Questions</h1>
            <Container>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> Who is a General Physician?</Accordion.Header>
                        <Accordion.Body>
                            A General Physician is a medical specialist who diagnoses common illnesses (such as common cold, flu, and Bronchitis) and gives treatment and advice accordingly. Chat with a general physician today on Tata Health to clear your doubts about any health problems.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is the difference between a General Physician / General Medicine doctor?</Accordion.Header>
                        <Accordion.Body>
                            The terms General Physician and General Medicine doctor can be used interchangeably. For any kind of routine checkup or non-emergency medical care, it is advisable to chat with a General Physician.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What does a General Physician do?</Accordion.Header>
                        <Accordion.Body>
                            It is not advisable to visit a clinic because of the Pandemic, hence online doctor consultations are the way forward. Fever, abdominal pain, headaches, cold and cough are some of the issues that one could get treated by a General Physician online. If you are experiencing any of these symptoms you must chat with a General Physician at the earliest.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Is it safe to consult online?</Accordion.Header>
                        <Accordion.Body>
                            Your consultation will be absolutely safe. Tata Health platform is absolutely safe & private where our customer's information and health data is the most important thing for us.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Can I consult an online doctor for emergencies?</Accordion.Header>
                        <Accordion.Body>
                            In case of emergencies, it is recommended that you visit the nearest hospital for immediate medical intervention. Tata Health doctors will be unable to help with cases that need immediate intensive care.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
};

export default Faq;