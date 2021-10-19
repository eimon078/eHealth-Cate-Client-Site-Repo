import React, { useEffect, useState } from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { user, signInWithGoogle, createUserWithEmailPassword, signInUserWithEmailPassword, setUser, setIsLoading } = useAuth();

    const [manualUser, setManualUser] = useState({ name: '', email: '', password: '' });
    const [checked, setChecked] = useState(false);
    const history = useHistory();

    const location = useLocation();
    console.log(location.state?.form);
    const redirect = location.state?.form || '/';

    const getValue = (e) => {
        let name = e.target.name;
        let vlaue = e.target.value;
        setManualUser({ ...manualUser, [name]: vlaue })
        console.log(user);

    }

    const googleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                setUser(res.user)
                history.push(redirect);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const registerUser = (event) => {
        event.preventDefault();
        createUserWithEmailPassword(manualUser.email, manualUser.password, manualUser.name);//Care This
        setManualUser({ name: '', email: '', password: '' });
    }

    const loginUser = (event) => {
        event.preventDefault();
        signInUserWithEmailPassword(manualUser.email, manualUser.password);
        setManualUser({ name: '', email: '', password: '' });
    }

    return (
        <div>
            {
                checked ? <div>
                    <h2 className="mt-5 mb-3">Please register</h2>
                    {/* <h3 className="text-danger">{error}</h3> */}
                    <Container>
                        <Form onSubmit={registerUser}>
                            <Row className="justify-content-center mb-3">
                                <Col lg="4">
                                    <Form.Control size="lg" type="text" placeholder="Name" name='name' onBlur={getValue} required />
                                </Col>
                            </Row>
                            <Row className="justify-content-center mb-3">
                                <Col lg="4">
                                    <Form.Control size="lg" type="email" placeholder="Email" name='email' onBlur={getValue} required />
                                </Col>
                            </Row>
                            <Row className="justify-content-center mb-3">
                                <Col lg="4">
                                    <Form.Control size="lg" type="password" placeholder="Password" name='password' onBlur={getValue} required />
                                </Col>
                            </Row>
                            <Row className="justify-content-center mb-3">
                                <Col lg="4">
                                    <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Already have an Account?" onClick={() => setChecked(!checked)} />
                                    </Form.Group>
                                </Col>

                            </Row>


                            <Button variant="primary" type="submit" className="mb-3">
                                register
                            </Button>
                        </Form>
                    </Container>

                </div>
                    :
                    <div>

                        <h2 className="mt-5 mb-3">Please Login</h2>
                        {/* <h3 className="text-danger">{error}</h3> */}
                        <Container>
                            <Form onSubmit={loginUser}>
                                <Row className="justify-content-center mb-3">
                                    <Col lg="4">
                                        <Form.Control size="lg" type="email" placeholder="Email" name='email' onBlur={getValue} required />
                                    </Col>
                                </Row>
                                <Row className="justify-content-center mb-3">
                                    <Col lg="4">
                                        <Form.Control size="lg" type="password" placeholder="Password" name='password' onBlur={getValue} required />
                                    </Col>
                                </Row>
                                <Row className="justify-content-center mb-3">
                                    <Col lg="4">
                                        <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="New User?" onClick={() => setChecked(!checked)} />
                                        </Form.Group>
                                    </Col>

                                </Row>


                                <Button variant="primary" type="submit" className="mb-3">
                                    Login
                                </Button>
                            </Form>
                        </Container>
                        <Button onClick={googleSignIn} variant="primary" type="submit" className="mb-5">
                            Google Sign in
                        </Button>
                    </div>

            }
        </div>
    );
};

export default Login;