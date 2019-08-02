import React from 'react';

class NavMenu extends React.Component {
    render() {
      return (
        <div className="nav-menu">
        <header role="banner">
            <div class="top-bar">
                <div class="container">
                    <div class="row"> 
                        <div class="col-6 text-right d-sm-flex d-flex">
                        <d class="ml-auto">
                            <a href="#" class="btn">Sponsor</a>
                            <a href="#" class="cta-btn">Login</a>
                        </d>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="index.html">Adopted</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample05">
                        <ul class="navbar-nav ml-auto pl-lg-5 pl-0">
                            <li class="nav-item">
                                <a class="nav-link active" href="index.html">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="services.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Adoption</a>
                                <div class="dropdown-menu" aria-labelledby="dropdown04">
                                <a class="dropdown-item" href="adoption.html">Adoption</a>
                                <a class="dropdown-item" href="adoption.html">Waiting Children</a>
                                <a class="dropdown-item" href="adoption-how-to.html">How to Adopt</a>
                                </div>

                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="about.html">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contact.html">Contact</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
            </header>
        </div>
      );
    }
}


export default NavMenu;
// export default Jumbotron;