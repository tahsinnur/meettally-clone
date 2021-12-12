import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PayOff.css';

const PayOff = () => {
    return (
        <div className='payoff-section'>
            <h1 style={{ fontSize: "64px", marginBottom: "80px" }}>Pay off your credit cards with Tally</h1>
            <Container>
                <div className='row payoff-content row-cols-1 row-cols-md-2 g-4'>
                    <div className='col'>
                        <div className='d-flex'>
                            <div className='num-div'>
                                <h1 className='num-1'>1</h1>
                            </div>
                            <div className='text-start justify-content-between'>
                                <h1>See how much you <br /> could save</h1>
                                <p style={{ fontSize: "20px", padding: "13px 5px 28px 0px" }}>Sign up, add your cards, and if eligible, Tally will offer you a custom, low-interest line of credit — designed to get you out of debt up to 2x faster<sup>1</sup>. Most users have at least a 580 FICO score.</p>
                                <Link to="/account-creation"><button className="payoff-btn py-3 px-4 mb-4" style={{ backgroundColor: "rgb(0, 78, 52)", fontSize: "17px", color: "white" }}>Check for savings</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <img width="250px" src="https://images.ctfassets.net/csd0v5p1fzif/3rojIjX76gRg00ErioYonq/a8eeb30dea3449804702c243bff919b4/Phone.png?w=640&h=&q=75&fit=pad" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PayOff;