import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div className="Footer">
                <footer class="site-footer" role="contentinfo">
                    <div class="container">
                        <div class="row mb-5">
                        <div class="col-md-3 mb-5">
                            <h3>About</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et dolor blanditiis consequuntur ex voluptates perspiciatis omnis unde minima expedita.</p>
                            <p><a href="#">Learn More</a></p>
                        </div>
                        <div class="col-md-3 mb-5">
                            <h3>Contact &amp; Address</h3>
                            <ul class="list-unstyled footer-link">
                            <li class="d-flex"><span class="mr-3">A:</span><span class="text-black">34 Street Name, City Name Here, United States</span></li>
                            <li class="d-flex"><span class="mr-3">T:</span><span class="text-black">+123456789</span></li>
                            <li class="d-flex"><span class="mr-3">E:</span><span class="text-black">info@yourdomain.com</span></li>
                            </ul>
                        </div>
                        
                        <div class="col-md-3">
                            <h3>Social</h3>
                            <ul class="list-unstyled footer-link d-flex footer-social">
                            <li><a href="#" class="p-2"><span class="fa fa-twitter"></span></a></li>
                            <li><a href="#" class="p-2"><span class="fa fa-facebook"></span></a></li>
                            <li><a href="#" class="p-2"><span class="fa fa-linkedin"></span></a></li>
                            <li><a href="#" class="p-2"><span class="fa fa-instagram"></span></a></li>
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