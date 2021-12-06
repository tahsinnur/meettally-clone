import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <div className="row">
                    <div className="col-md-6 col-12  banner-content text-start" style={{padding:"50px", borderRadius:"15px", marginTop:"100px"}}>
                        <h1>Delete your credit card debt,
                            <br />build your future</h1>
                        <p className=" text-white py-3 fs-4" style={{ fontWeight: "500" }}>Meet the credit card payoff app that can
                            <br />
                            save you up to $4,1852<sup>2</sup> in 5 years.</p>
                        <Link to="/account-creation"><button className="banner-btn py-3 px-4 mb-4" style={{ backgroundColor: "white", fontSize: "17px", color: "rgb(0, 78, 52)" }}>Start Saving</button></Link>
                        <br />
                        <Link className="text-white fw-bold" style={{ fontSize: "18px" }} to='/'>Learn How Tally Works</Link>
                    </div>
                    <div className="col-6"></div>
                </div>
            </Container>

        </div>
    );
};

export default Banner;