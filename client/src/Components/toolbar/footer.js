import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div className="Footer">
                <footer className="site-footer" role="contentinfo">
                    <div className="container">
                        <div className="row mb-5">
                        <div className="col-md-4 mb-5">
                            <h3>About</h3>
                            <p>Family First Adoption educates families about foster care and adoption and gives child welfare professionals information 
                                and support to help them improve their services. We also maintain the nation’s only federally funded photolisting 
                                service that connects waiting children with families.</p>
                            <p><a href="/">Learn More</a></p>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h3>Get in Touch</h3>
                            <ul className="list-unstyled footer-link">
                            <li className="d-flex"><span className="mr-3">A:</span><span className="text-black">214 SMU Blvd, Dallas TX 75206, United States</span></li>
                            <br/>
                            <li className="d-flex"><span className="mr-3">T:</span><span className="text-black">+1(214)565-7889</span></li>
                            <br/>
                            <li className="d-flex"><span className="mr-3">E:</span><span className="text-black">info@ffa.com</span></li>
                            </ul>
                        </div>
                        
                        <div className="col-md-3">
                            <h3>Follow Us!</h3>
                            <ul className="list-unstyled footer-link d-flex footer-social">
                            <li><a href="/" className="p-2"><span className="fa fa-twitter"></span></a></li>
                            <li><a href="/" className="p-2"><span className="fa fa-facebook"></span></a></li>
                            <li><a href="/" className="p-2"><span className="fa fa-linkedin"></span></a></li>
                            <li><a href="/" className="p-2"><span className="fa fa-instagram"></span></a></li>
                            </ul>
                        </div>
                        </div>
                        
                    </div>
                </footer>
            </div>

        );
    }
}

export default Footer;