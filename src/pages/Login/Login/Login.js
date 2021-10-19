import React, { useState } from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { user, signInWithGoogle, createUserWithEmailPassword, signInUserWithEmailPassword, setUser, setIsLoading } = useAuth();

    //This Component required state
    const [manualUser, setManualUser] = useState({ name: '', email: '', password: '' });
    const [checked, setChecked] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    //handle redirect
    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.form || '/';

    // get innput field value 

    const getValue = (e) => {
        let name = e.target.name;
        let vlaue = e.target.value;
        setManualUser({ ...manualUser, [name]: vlaue })
    }

    // firebase auth method 
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
        if (manualUser.password.length < 6) {
            setPasswordError('Password Must be atleast 6 Character');
        }
        else {
            createUserWithEmailPassword(manualUser.email, manualUser.password, manualUser.name);//Care This
            setManualUser({ name: '', email: '', password: '' });
            setPasswordError('');
            history.push(redirect);
        }
    }

    const loginUser = (event) => {
        event.preventDefault();
        signInUserWithEmailPassword(manualUser.email, manualUser.password)
            .then(res => {
                setUser(res.user);
                history.push(redirect);
            })
            .finally(() => {
                setIsLoading(false)
            })
        setManualUser({ name: '', email: '', password: '' });
    }

    return (
        <div>
            {
                checked ? <div>
                    <h2 className="mt-5 mb-3">Please register</h2>
                    <h3 className="text-danger">{passwordError}</h3>
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
                                        <Form.Check type="checkbox" label="Already have an Account Select Box to Login?" onClick={() => setChecked(!checked)} />
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
                                            <Form.Check type="checkbox" label="New User Select Box to Create Account?" onClick={() => setChecked(!checked)} />
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