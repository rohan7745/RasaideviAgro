import React from 'react';
import CounterAnimation from './CounterAnimation.jsx';

const MyComponent = () => {
    return (
        <div className="container-fluid mainDiv">
            <div className="row">
                <div className="col-md-6 col-sm-12 col-lg-3">
                    <div className="counter green">
                        <div className="counter-icon"><i className="fa-solid fa-handshake"></i></div>
                        <div className="counter-content">
                            <CounterAnimation startCount={0} endCount={5} /><span>+</span>
                            <h3>Years Experience</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-3">
                    <div className="counter green">
                        <div className="counter-icon"><i className="fa-regular fa-face-grin-stars"></i></div>
                        <div className="counter-content">
                            <CounterAnimation startCount={0} endCount={700} /><span>+</span>
                            <h3>Happy Clients</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-3">
                    <div className="counter green">
                        <div className="counter-icon"><i className="fa fa-rocket"></i></div>
                        <div className="counter-content">
                            <CounterAnimation startCount={0} endCount={100} /><span>%</span>
                            <h3>Success Rate</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-3">
                    <div className="counter green">
                        <div className="counter-icon"><i className="fa-solid fa-award"></i></div>
                        <div className="counter-content">
                            <CounterAnimation startCount={0} endCount={3} />
                            <h3>Awards</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
