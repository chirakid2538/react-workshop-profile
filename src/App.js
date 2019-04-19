import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Grid">
                    <div className="text-center">
                        <img className="Avatar text-center" alt="aum" src="https://i2.wp.com/curtsy.com.ph/wp-content/uploads/2018/03/16.png" />
                    </div>
                    <div className="text-center">
                        <i className="fab fa-facebook-square fa-3x ContactIcon" />
                    </div>
                    
                    <div>
                        <div className="Title">Profile</div>
                        <div>
                            <div>Chirakid Kaweesirikon [Aum] </div>
                            <div>Email : aum.chirakid@gmail.com</div>
                            <div>Phone : 0827639234</div>
                        </div>
                    </div>
                    <div>
                        <div className="Title">Technical skills</div>
                        <div>
                            <div>Html</div>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "70%" }} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div>
                            <div>Js</div>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "50%" }} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div>
                            <div>PHP</div>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "70%" }} aria-valuemin="0" ariaCaluemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Grid">
                    <div>
                        <div className="Title">Experience</div>
                        <div>
                            <div className="SubTitle">Web Dev</div>
                            <ul>
                                <li>SHIPPOP - 2018 : Web application</li>
                            </ul>
                        </div>
                        <div>
                            <div className="SubTitle">Internship - 2017</div>
                            <ul>
                                <li>Learned Html</li>
                                <li>Learned Css/Scss</li>
                                <li>Learned Js</li>
                                <li>Learned PHP</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="Title">Education</div>
                        <ul>
                            <li>Com sci - SSRU 2014</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
