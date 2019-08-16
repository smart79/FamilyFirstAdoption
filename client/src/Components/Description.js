import React, { Component } from 'react';
import NavMenu from './toolbar/navMenu';

class Description extends Component {
  render() {
    return (
      <div className="Description">
        <NavMenu />
        <div id="content">
          {/* <main id="main" style="width: 640px;"> */}
          <h1>Who we are</h1>
          <p class="nutGraph">A national project working to ensure that children and teens in foster care get safe, loving, permanent families</p>
          <div class="bodyContent">
            <figure class="pageImage"><img class="pageImage" src="/_assets/images/AUSK/pages/who-we-are-575x285-1.jpg" alt="" /></figure>
            <p>Fisrt Family Adoption educates families about foster care and adoption and gives child welfare professionals information and support to help them improve their services.
                        We also maintain the nation’s only federally funded photolisting service that connects waiting children with families.</p>

            <p>Our mission:</p>

            <ul>
              <li>Raise public awareness about the need for foster and adoptive families for children in the public child welfare system</li>
              <li>Assist US states, territories, and tribes to recruit, engage, develop and support foster and adoptive families</li>
            </ul>

            <p>Meet the <a href="/about-us/who-we-are/leadership">leadership of First Family Adoption</a>.</p>

            <h2>Serving families</h2>

            <p>We help families with the adoption process—every step of the way:</p>

            <ul>
              <li>We answer questions from families who are exploring foster care and adoption online and over the phone.</li>
              <li>We help families who are approved to adopt search for children on our <a href="/_app/login/login.aspx">national photolisting</a>
                and make inquiries directly to the children’s caseworkers.</li>
              <li>We connect a community of more than 200,000 families online through our
                    <a href="https://www.facebook.com/AdoptUSKids">Facebook page</a> and <a href="https://twitter.com/AdoptUSKids">Twitter channel</a>.</li>
            </ul>

            <p>Read more about <a href="/about-us/how-we-help-families">how we help families</a>.</p>

            <h2>Helping professionals</h2>

            <p>We provide an array of resources to caseworkers and agency managers and administrators:</p>

            <ul>
              <li>Caseworkers use our site to search for families for children and access resources that help them manage their caseloads and find and support families.</li>
              <li>Administrators and managers come to us for resources and capacity-building services that improve their agency’s ability to recruit and support families and help children.</li>
              <li>Emerging leaders develop skills and networks through our new <a href="/for-professionals/mpld">Minority Professional Leadership Development program</a>.</li>
              <li>All professionals access publications and archived webinars on topics ranging from finding families to working with diverse communities.</li>
            </ul>

            <p>Read more about <a href="/">how we help professionals</a>.</p>

            <h2>Raising awareness of teens in foster care</h2>

            <p>Through a partnership with the Ad Council, we produce the <a href="/">“You don’t have to be perfect to be a perfect parent” campaign</a> to raise awareness of the need for families for teens in foster care.</p>

            <h2>Frequently asked questions about AdoptUSKids</h2>

            <p>Every day, AdoptUSKids staff respond to hundreds of questions from families and professionals who call our adoption and foster care resource specialists or visit our <a href="https://www.facebook.com/AdoptUsKids">Facebook</a> page. Below are responses to a few of the frequently asked questions.</p>

            <p><strong>Is AdoptUSKids an adoption agency?</strong></p>

            <p>No. We work on behalf of states, territories, tribes, and their private agency partners to help connect families interested in adoption and foster care with resources and the agencies responsible for finding foster and adoptive families for children in their care.</p>

            <p><strong>Do you charge for your services?</strong></p>

            <p>Never. AdoptUSKids is federally funded through a project created to increase the number of children in foster care who are placed into safe, permanent families. Our services to families and professionals are offered free of charge.</p>

            <p><strong>Whom do I call with questions about adoption?</strong></p>

            <p>You can call our team of adoption and foster care specialists Monday–Friday, 9 a.m.–5 p.m. eastern time: 888-200-4005. They are also available through our online chat feature weekdays, 9 a.m.–4 p.m. eastern time.</p>

            <h2>Things to do next:</h2>

            <ul>
              <li>Visit our blog to read <a href="/">stories of families</a> who have adopted children from foster care—many with the help of AdoptUSKids.</li>
              <li>Learn more about the <a href="/">children who are in foster care</a>.</li>
              <li>Visit <a href="/">our Facebook page</a>, a vibrant community of 190,000 families sharing their questions and experiences.</li>
            </ul>
          </div>
          {/* </main> */}
          <div id="rightColumn">


          </div>
        </div>
      </div>

    )
  }
}

export default Description;