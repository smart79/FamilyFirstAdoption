import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


class NavMenu extends React.Component {
    render() {
        return (
            <Router>
                <div className="nav-menu">
                    <header role="banner">
                        <div className="top-bar">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6 text-right d-sm-flex d-flex">
                                        <div className="ml-auto">
                                            <a href="/" className="btn">Sponsor</a>
                                            <a href="/" className="cta-btn">Login</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container">
                                <a className="navbar-brand" href="/">Adopted</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarsExample05">
                                    <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="/">Home</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="services.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Adoption</a>
                                            <div className="dropdown-menu" aria-labelledby="dropdown04">
                                                <a className="dropdown-item" href="adoption.html">Adoption</a>
                                                <a className="dropdown-item" href="adoption.html">Waiting Children</a>
                                                <a className="dropdown-item" href="adoption-how-to.html">How to Adopt</a>
                                            </div>

                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="/About">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html">Contact</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </header>
                </div>

            </Router>
        );
    }
}


export default NavMenu;
