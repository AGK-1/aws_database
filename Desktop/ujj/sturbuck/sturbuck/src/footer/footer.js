
import { Container, Row, Col, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";


function Footer() {
    const [isMobile, setIsMobile] = useState(false);

    const handleSelectChange = (event) => {
        const selectedUrl = event.target.value;
        if (selectedUrl) {
            window.location.href = selectedUrl; // Navigate to the selected link
        }
    };
    // Detect screen width to toggle between columns or select box
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Check if screen width is less than 768px (mobile)
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <footer className="bg-dark text-white py-4">
            <Container>
                <Row className="justify-content-center">
                    {/* If it's mobile, render select box for each column */}
                    {isMobile ? (
                        <>
                            <Col xs={12}>
                                <h5>About Starbucks</h5>
                                <Form>
                                    <Form.Group controlId="footerSelectColumn1">

                                        <div className="position-relative">
                                            <Form.Control
                                                as="select"
                                                className="bg-transparent border-0 ps-4 pe-5 text-white"
                                                onChange={handleSelectChange} // Handle selection change
                                            >
                                                <option value=""></option>
                                                <option className="text-dark" value="https://example.com/company">Our Company</option>
                                                <option className="text-dark" value="https://example.com/coffee">Our Coffee</option>
                                                <option className="text-dark" value="https://example.com/news">Stories and News</option>
                                                <option className="text-dark" value="https://example.com/investor">Investor Relations</option>
                                                <option className="text-dark" value="https://example.com/customer-service">Customer Services</option>
                                            </Form.Control>
                                            <i className="bi bi-chevron-down position-absolute top-50 end-0 translate-middle-y mr-3"></i>
                                        </div>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col xs={12}>
                                <h5>Careers</h5>
                                <Form>
                                    <Form.Group controlId="footerSelectColumn2">

                                        <div className="position-relative">
                                            <Form.Control
                                                as="select"
                                                className="bg-transparent border-0 ps-4 pe-5 text-white"
                                                onChange={handleSelectChange} // Handle selection change
                                            >
                                                <option value=""></option>
                                                <option className="text-dark" value="https://example.com/company">Culture and Values</option>
                                                <option className="text-dark" value="https://example.com/coffee">Works and Starbucks</option>
                                                <option className="text-dark" value="https://example.com/news">Retail Careers</option>
                                                <option className="text-dark" value="https://example.com/investor">Diversity and Inclusion</option>
                                                <option className="text-dark" value="https://example.com/customer-service">Customer Services</option>
                                            </Form.Control>
                                            <i className="bi bi-chevron-down position-absolute top-50 end-0 translate-middle-y"></i>
                                        </div>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col xs={12}>
                                <h5>Social Impact</h5>
                                <Form>
                                    <Form.Group controlId="footerSelectColumn3">

                                        <div className="position-relative">
                                            <Form.Control
                                                as="select"
                                                className="bg-transparent border-0 ps-4 pe-5 text-white"
                                                onChange={handleSelectChange} // Handle selection change
                                            >
                                                <option value=""></option>
                                                <option className="text-dark" value="https://example.com/company">Overview</option>
                                                <option className="text-dark" value="https://example.com/coffee">People</option>
                                                <option className="text-dark" value="https://example.com/news">Planet</option>
                                                <option className="text-dark" value="https://example.com/investor">Enviromental and Social impact Reporting</option>
                                            </Form.Control>
                                            <i className="bi bi-chevron-down position-absolute top-50 end-0 translate-middle-y"></i>
                                        </div>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col xs={12}>
                                <h5>For Business Partners</h5>
                                <Form>
                                    <Form.Group controlId="footerSelectColumn4">

                                        <div className="position-relative">
                                            <Form.Control
                                                as="select"
                                                className="bg-transparent border-0 ps-4 pe-5 text-white"
                                                onChange={handleSelectChange} // Handle selection change
                                            >
                                                <option value=""></option>
                                                <option className="text-dark" value="https://example.com/company">Landlord Support Center</option>
                                                <option className="text-dark" value="https://example.com/coffee">Corparate Gift Cards Sales</option>
                                                <option className="text-dark" value="https://example.com/news">Branded Solutions</option>
                                            </Form.Control>
                                            <i className="bi bi-chevron-down position-absolute top-50 end-0 translate-middle-y"></i>
                                        </div>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col xs={12}>
                                <h5>Order and Pickup</h5>
                                <Form>
                                    <Form.Group controlId="footerSelectColumn5">

                                        <div className="position-relative">
                                            <Form.Control
                                                as="select"
                                                className="bg-transparent border-0 ps-4 pe-5 text-white"
                                                onChange={handleSelectChange} // Handle selection change
                                            >
                                                <option value=""></option>
                                                <option className="text-dark" value="https://example.com/company">Order on the App</option>
                                                <option className="text-dark" value="https://example.com/coffee">Order on the Web</option>
                                                <option className="text-dark" value="https://example.com/news">Delivery</option>
                                                <option className="text-dark" value="https://example.com/coffee">Order and Pickup Options</option>
                                                <option className="text-dark" value="https://example.com/news">Corporate Careers</option>
                                            </Form.Control>
                                            <i className="bi bi-chevron-down position-absolute top-50 end-0 translate-middle-y"></i>
                                        </div>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </>
                    ) : (
                        // On larger screens, render columns with links
                        <>
                            <Col xs={12} sm={6} md={4} lg={2} className="d-flex flex-column align-items-center">
                                <h5>About Starbucks</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-white text-decoration-none">Our Company</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">Our Coffee</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">Stories and News</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">Investor Relations</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">Customer Services</a></li>
                                </ul>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={2} className="d-flex flex-column align-items-center">
                                <h5>Careers</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-white text-decoration-none">Culture and Values</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">Works and Starbucks</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">Retail Careers</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">Diversity and Inclusion</a></li>
                                </ul>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={2} className="d-flex flex-column align-items-center">
                                <h5>Social Impact</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-white text-decoration-none">Overview</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">People</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">Planet</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">Enviromental and Social impact Reporting</a></li>
                                </ul>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={2} className="d-flex flex-column align-items-center">
                                <h5>For Business Partners</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-white text-decoration-none">Landlord Support Center</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">Corparate Gift Cards Sales</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">Branded Solutions</a></li>
                                </ul>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={2} className="d-flex flex-column align-items-center">
                                <h5>Order and Pickup</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-white text-decoration-none">Order on the App</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">Order on the Web</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">Delivery</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">Order and Pickup Options</a></li>
                                    <li><a href="#" className="text-white text-decoration-none">Corporate Careers</a></li>
                                </ul>
                            </Col>
                        </>
                    )}
                </Row>
                <br></br>
                <div>

                    <i class="bi bi-amazon m-2 fs-3"></i>
                    <i class="bi bi-apple m-2 fs-3"></i>
                    <i class="bi bi-at m-2 fs-3"></i>






                </div>
            </Container>
        </footer >
    );

}

export default Footer;