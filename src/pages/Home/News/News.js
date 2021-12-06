import React from 'react';
import { Container } from 'react-bootstrap';

const News = () => {
    return (
        <div style={{ backgroundColor: "rgb(242, 248, 242)", paddingTop: "100px", paddingBottom: "50px" }}>
            <Container>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div style={{ border: "none", backgroundColor: "transparent" }} className="card h-100">
                            <img style={{ width: "198px", height: "29px", maxHeight: "31px", marginBottom: "10px" }} src="https://images.ctfassets.net/csd0v5p1fzif/5eLjpqFt0v75QsJ7zfCail/9ca5b76326532f751563a2f6145f3ad7/NYT-min.png" className="card-img-top mx-auto" alt="..." />
                            <div className="card-body">
                                <p style={{ fontSize: "20px", fontWeight: "500" }} className="card-text">"Tally could save people
                                    <br />
                                    hundreds of dollars in
                                    <br />
                                    interest and fees a year."</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div style={{ border: "none", backgroundColor: "transparent" }} className="card h-100">
                            <img style={{ width: "119px", height: "31px", maxHeight: "31px", marginBottom: "10px" }} src="https://images.ctfassets.net/csd0v5p1fzif/3aFXuSXHbASDv14GaiUOMq/5b2f363006ffa10b4f88152bbc460c4d/Forbes-min.png" className="card-img-top mx-auto" alt="..." />
                            <div className="card-body">
                                <p style={{ fontSize: "20px", fontWeight: "500" }} className="card-text">"Tally could save people
                                    <br />
                                    hundreds of dollars in
                                    <br />
                                    interest and fees a year."</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div style={{ border: "none", backgroundColor: "transparent" }} className="card h-100">
                            <div className="">
                                <img style={{ width: "119px", height: "160px", maxHeight: "31px", marginBottom: "10px" }} src="https://images.ctfassets.net/csd0v5p1fzif/6pWf0flL5J627Yn2ANPltX/c32891f6f27a4a29aeb1cbbf039e3cfc/Good_Morning_America.png" className="card-img-top mx-auto" alt="..." />
                            </div>
                            <div className="card-body">
                                <p style={{ fontSize: "20px", fontWeight: "500" }} className="card-text">"Tally could save people
                                    <br />
                                    hundreds of dollars in
                                    <br />
                                    interest and fees a year."</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div style={{ border: "none", backgroundColor: "transparent" }} className="card h-100">
                            <img style={{width: "167px", height: "23px", maxHeight: "31px", marginBottom: "10px" }} src="https://images.ctfassets.net/csd0v5p1fzif/6eMudSRuse5lcVF0nmwG6s/efc7c8779ccd1cdf46396b6452765e85/CNBC-min.png" className="card-img-top mx-auto" alt="..." />
                            <div className="card-body">
                                <p style={{ fontSize: "20px", fontWeight: "500" }} className="card-text">"Tally could save people
                                    <br />
                                    hundreds of dollars in
                                    <br />
                                    interest and fees a year."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default News;