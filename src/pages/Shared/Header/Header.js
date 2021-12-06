import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src="https://images.ctfassets.net/csd0v5p1fzif/1googNbLKz0pZKwWl0BQB3/69a430d70a51ae55c63cac0ab17c92d3/logo-icon-full--primary.svg" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <div className="navigation">
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 fw-bold"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link style={{ color: "rgb(0, 78, 52)", marginLeft: "36px" }} as={Link} to="/how-tally-works">How Tally Works</Nav.Link>
                            <Nav.Link style={{ color: "rgb(0, 78, 52)", marginLeft: "36px" }} as={Link} to="/tour-tally-app">Tour The App</Nav.Link>
                            <Nav.Link style={{ color: "rgb(0, 78, 52)", marginLeft: "36px" }} as={Link} to="/credit-card-debt-payoff-calculator">Debt Calculator</Nav.Link>
                            <Nav.Link style={{ color: "rgb(0, 78, 52)", marginLeft: "36px" }} as={Link} to="/tally-reviews">Tally Reviews</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                    <div>
                        <Link to="/account-creation"><button className="btn text-white rounded-pill fw-bold px-4 py-2" style={{ backgroundColor: "rgb(0, 78, 52)", marginLeft: "50px", fontSize: "17px" }}>Start Saving</button></Link>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;