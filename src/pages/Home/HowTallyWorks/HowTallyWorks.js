import React from 'react';
import { Container } from 'react-bootstrap';
import './HowTallyWorks.css';

const HowTallyWorks = () => {
    return (
        <div>
            <div className="howtallyworks"></div>
            <h1 style={{ fontSize: "64px", marginTop: "-225px", padding: "20px 20px 30px" }}>How Tally Works</h1>
            <Container>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div style={{ border: "none", backgroundColor: "transparent" }} className="card h-100">
                            <img style={{ height: "225px", width: "225px" }} src="https://images.ctfassets.net/csd0v5p1fzif/1HGkMepcijcVxJG1MBBtXw/f043d5b242baf2eb947ce483253bd236/ezgif.com-gif-maker-2.gif?w=256&h=&q=75" className="card-img-top mx-auto" alt="..." />
                            <div className="card-body p-0">
                                <h3 style={{ fontSize: "24px" }} className="card-title">Get started
                                    <br />
                                    in minutes</h3>
                                <p style={{ fontSize: "20px", fontWeight: "500" }} className="card-text pt-2">It’s easy, straightforward, and quick
                                    <br />
                                    to apply. Sign up and instantly see
                                    <br />
                                    how much you can save.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div style={{ border: "none", backgroundColor: "transparent" }} className="card h-100">
                            <img style={{ height: "225px", width: "225px" }} src="https://images.ctfassets.net/csd0v5p1fzif/3hIojGs5c7JK1CesLc8Ngp/d1af989dda524a265caf9d9e3471eeb8/relax-compressed.gif?w=256&h=&q=75" className="card-img-top mx-auto" alt="..." />
                            <div className="card-body p-0">
                                <h3 style={{ fontSize: "24px" }} className="card-title">Get started
                                    <br />
                                    in minutes</h3>
                                <p style={{ fontSize: "20px", fontWeight: "500" }} className="card-text pt-2">It’s easy, straightforward, and quick
                                    <br />
                                    to apply. Sign up and instantly see
                                    <br />
                                    how much you can save.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div style={{ border: "none", backgroundColor: "transparent" }} className="card h-100">
                            <img style={{ height: "225px", width: "225px" }} src="https://images.ctfassets.net/csd0v5p1fzif/1sqAeGnTOMN0w6Ay7PwZoM/fceb51581c7ba9e792c14b229ad8ed02/ezgif.com-gif-maker-1.gif?w=256&h=&q=75" className="card-img-top mx-auto" alt="..." />
                            <div className="card-body p-0">
                                <h3 style={{ fontSize: "24px" }} className="card-title">Get started
                                    <br />
                                    in minutes</h3>
                                <p style={{ fontSize: "20px", fontWeight: "500" }} className="card-text pt-2">It’s easy, straightforward, and quick
                                    <br />
                                    to apply. Sign up and instantly see
                                    <br />
                                    how much you can save.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>

    );
};

export default HowTallyWorks;