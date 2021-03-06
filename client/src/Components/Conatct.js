import React, {Component} from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import operator from './images/operator.jpg'

class Contact extends Component{
    render(){
      return(
        <div className="Contact">
            <div className="container">
                <div className="row">
                <main id="main" className="col-9">
                    <h1>Contact us</h1>
                    <p class="nutGraph">Our foster care and adoption specialists are here to help you</p>
                    <div class="bodyContent">
                        <figure class="pageImage"><img class="pageImage" src="/images/operator.jpg" alt=""/></figure>
                        <p>Our foster care and adoption specialists are ready to help guide you through the process—from deciding whether foster care and adoption are right for your family to contacting an agency to registering on our website.</p>

                        <p>Specialists are available by phone and email weekdays, 9 a.m.–5 p.m. eastern time. For answers to commonly asked questions, <a href="/adoption-and-foster-care/overview/faq">see our FAQ</a>.</p>

                        <h3>By phone</h3>

                        <p>In English: 888-200-4005<br/>
                        En español: 877-236-7831</p>

                        <h3>By email</h3>

                        <p>In English: <a href="mailto:info@adoptuskids.org">info@adoptuskids.org</a><br/>
                        En español: <a href="mailto:espanol@adoptuskids.org">espanol@adoptuskids.org</a></p>

                        <h3>Chat</h3>

                        <p>You can also contact foster care and adoption specialists through chat weekdays, 10 a.m.–4 p.m. eastern time. (Begin a chat by clicking on the “chat” link at the bottom of this page.)</p>

                        <h2>Website technical assistance</h2>

                        <p>Are you registered on our website and having trouble with your account? Call or email our technical support staff weekdays, 9:30 a.m.–6:30 p.m. eastern time.</p>

                        <p>By phone: 800-901-6911<br/>
                        By email: <a href="mailto:support@adoptuskids.org">support@adoptuskids.org</a></p>

                        <h2>Photo submissions</h2>

                        <p>Submit photos of registered children and families for our photolisting by email to <a href="mailto:Photos@adoptuskids.org">photos@adoptuskids.org</a>. Please include name and case number.</p>

                        <h2>Media inquiries</h2>

                        <p>AdoptUSKids leaders and spokesfamilies are available to share their knowledge of child welfare and their experiences with foster care and adoption.</p>

                        <p>Contact our <a href="mailto:motero@adoptuskids.org?subject=Media%20inquiry">national campaign director</a> to request information or an interview.</p>
                    </div>
                </main>
                </div>
            </div>
        </div>
  
      )
    }
  }
  
  export default Contact;