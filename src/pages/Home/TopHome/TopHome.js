import React from 'react';
import { Carousel } from 'react-bootstrap';
import first from '../../../Images/carouselImg/first.jpg'
import second from '../../../Images/carouselImg/2nd.jpg'
import third from '../../../Images/carouselImg/second.jpg'

const TopHome = () => {
    const imgStyle = {
        height: "500px",
        width: "800px"
    }
    return (
        <div>
            <Carousel>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        style={imgStyle}
                        src={first}
                        alt="First slide"
                    />
                    <Carousel.Caption className="top-50 text-black fw-bolder opacity-75">
                        <h1 className="fs-1">We are here For Your Care</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={imgStyle}
                        src={second}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="top-50 text-black fw-bolder opacity-75">
                        <h5 className="fs-1">Create a strong and lasting first impression with our paitents</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={imgStyle}
                        src={third}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="top-50 text-black fw-bolder opacity-75">
                        <h5 className="fs-1">eHelath Care ensures a fantastic experience</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TopHome;