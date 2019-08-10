import React, {Component} from 'react';

// import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

class Survey extends Component{
    render(){
      return(
        <div className="About">
          <div className="container">
          

              <h3><strong>About You</strong></h3>

              <h4>First Name (Required)</h4>
              <input type="text" id="Fname" className="form-control" required/>
              <h4>Last Name (Required)</h4>
              <input type="text" id="Lname" className="form-control" required/>
              <h4>Address (Required)</h4>
              <h4>Spouse's First Name (Required)</h4>
              <input type="text" id="spouseFname" className="form-control" required/>
              <h4>Spouse's Last Name (Required)</h4>
              <input type="text" id="spouseLname" className="form-control" required/>
              <h4>Address (Required)</h4>
              <input type="text" id="address" className="form-control" required/>
              
              <h4>City (Required)</h4>
              <input type="text" id="city" className="form-control" required/>
              <h4>State (Required)</h4>
              <input type="text" id="state" className="form-control" required/>
              <h4>Phone Number (Required)</h4>
              <input type="text" id="phone" className="form-control" required/>
              <h4>Email (Required)</h4>
              <input type="text" id="email" className="form-control" required/>
              <h4>Religion (Required)</h4>
              <input type="text" id="religion" className="form-control" required/>
              <h4>Ocupation (Required)</h4>
              <input type="text" id="ocupation" className="form-control" required/>
              <h4>Education (Required)</h4>
              <input type="text" id="education" className="form-control" required/>

              <h4>Link to Photo Image (Required)</h4>
              <input type="text" id="photo" className="form-control" required/>

              <hr/>

              <h3><strong>Question 1</strong></h3>
              <h4>How did you hear about our Adoption site?</h4>
              <select className="chosen-select" id="q1">
                <option value=""></option>
                <option value="1">Adds</option>
                <option value="2">Friends / Family</option>
                <option value="3">Social Media</option>
                <option value="4">Other</option>
              </select>

              <h3><strong>Question 2</strong></h3>
              <h4>When will you be ready to begin the adoption process?</h4>
              <select className="chosen-select" id="q2">
                <option value=""></option>
                <option value="1">Today</option>
                <option value="2">3-6 Months </option>
                <option value="3">6 monts to a year</option>
                <option value="4">More than a year</option>
              </select>


              <h3><strong>General Description</strong></h3>

              <h4>Date of Birth</h4>
              <input type="text" id="dob" className="form-control" required/>
              <h4>Your Race</h4>
              <select className="chosen-select" id="q3">
                <option value=""></option>
                <option value="1">African American</option>
                <option value="2">Asian</option>
                <option value="3">Caucasian</option>
                <option value="4">Hispanic/Latino</option>
                <option value="5">Native American</option>
              </select>
              <h4>What are your hobbies and talents</h4>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <h4>Community sevice / involment</h4>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

              <h4>Spouse's Date of Birth</h4>
              <input type="text" id="dob" className="form-control" required/>
              <h4>Spouse's Race</h4>
              <select className="chosen-select" id="q3">
                <option value=""></option>
                <option value="1">African American</option>
                <option value="2">Asian</option>
                <option value="3">Caucasian</option>
                <option value="4">Hispanic/Latino</option>
                <option value="5">Native American</option>
              </select>
            
              <div className="form-group">
                  <h4>Spouse's hobbies and talents</h4>
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <h4>Spouse's Community sevice / involment</h4>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <h4>Spouse's hobbies and talents</h4>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

              <h4>Date of Mariage</h4>
              <input type="text" id="dob" className="form-control" required/>

              <h3><strong>Financial Summary</strong></h3>

              <h4>Household Income</h4>
              <select className="chosen-select" id="q4">
                <option value=""></option>
                <option value="1">1 (Strongly Disagree)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 (Strongly Agree)</option>
              </select>
              
              <h3><strong>Personal History</strong></h3>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">
                  Declared Bankruptcy
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">
                  Been under psychiatric care
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">
                  Dishonorable discharge from the military
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">
                  Been arrested
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">
                  Placed Child for adoption
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">
                  Past due on court ordered child support
                </label>
              </div>

              <h4>If you checked any of the boxes above, please explain:</h4>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <h4>Please describe briefly your reasons for wanting to adopt:</h4>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              

              <h3><strong>Lyfestyle Information</strong></h3>
              <h4>Please describe your home and neighborhood:</h4>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <h4>What do you enjoy doing together and individually?</h4>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <h4>Please briefly describe how you think your life will change after the adoption</h4>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>



              <button type="submit" className="btn btn-primary btn-lg btn-block" id="submit"><i className="fa fa-check-circle"
                  aria-hidden="true"></i>Submit</button>

            </div>

        </div>
  
      )
    }
  }
  
  export default Survey;