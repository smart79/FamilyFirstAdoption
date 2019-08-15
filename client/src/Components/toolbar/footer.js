import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div className="Footer">
                <footer className="site-footer" role="contentinfo">
                    <div className="container">
                        <div className="row mb-5">
                        <div className="col-md-3 mb-5">
                            <h3>About</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et dolor blanditiis consequuntur ex voluptates perspiciatis omnis unde minima expedita.</p>
                            <p><a href="/">Learn More</a></p>
                        </div>
                        <div className="col-md-3 mb-5">
                            <h3>Contact &amp; Address</h3>
                            <ul className="list-unstyled footer-link">
                            <li className="d-flex"><span className="mr-3">A:</span><span className="text-black">34 Street Name, City Name Here, United States</span></li>
                            <li className="d-flex"><span className="mr-3">T:</span><span className="text-black">+123456789</span></li>
                            <li className="d-flex"><span className="mr-3">E:</span><span className="text-black">info@yourdomain.com</span></li>
                            </ul>
                        </div>
                        
                        <div className="col-md-3">
                            <h3>Social</h3>
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