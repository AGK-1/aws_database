import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Header= ({ onUpdateContent }) => {  
    return (
        <div>
            <Navbar bg="danger" variant="dark" expand="lg" className="justify-content-left fw-bold">
                <Navbar.Brand href="#home" onClick={() => onUpdateContent('home')}><img src="https://img.icons8.com/?size=100&id=1oqfhfFvXU8c&format=png&color=000000" height="55px"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Using justify-content-end to align the Nav items to the right */}


                    <Nav className="justify-content-center-around" style={{ width: "100%" }}>
                        <Nav.Link href="#home" onClick={() => onUpdateContent('home')}>MENU</Nav.Link>
                        <Nav.Link href="#" onClick={() => onUpdateContent('rewards')}>REWARDS</Nav.Link>
                        <Nav.Link href="#link" onClick={() => onUpdateContent('gift')}>GIFT CARDS</Nav.Link>
                    </Nav>
                    <i className="bi bi-geo-alt" style={{ fontSize: "24px", color: "white" }}></i>

                    <div className="d-flex justify-content-center m-3 gap-3">

                        <br></br>
                       
                        
                            <Button variant="light" className="border border-dark">
                                Sign_in
                            </Button>

                            {/* Black Button */}
                            <Button variant="dark">
                                Register
                            </Button>
                          
                    </div>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );

}

export default Header;