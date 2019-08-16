import React, { Component } from 'react';

class sponInfo extends Component {
  state = {
    firstName: "",
    lastName: "",
    // address: "",
    spFname: "",
    spLname: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    email: "",
    religion: "",
    occupation: "",
    education: "",
    photo: "",

  }

  handleInputs = (event) => {
    console.log(event.target)
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="sponInfo">
        <div className="container"></div>

        <h3><strong>About You</strong></h3>

        <h4>First Name (Required)</h4>
        <input type="text" id="Fname" name="firstName" value={this.state.firstName} className="form-control" onChange={this.handleInputs} required />
        <h4>Last Name (Required)</h4>
        <input type="text" id="Lname" name="lastName" value={this.state.lastName} className="form-control" onChange={this.handleInputs} required />
        <h4>Address</h4>
        <input type="text" id="address" name="address" value={this.state.address} className="form-control" onChange={this.handleInputs} />
        <h4>Spouse's First Name</h4>
        <input type="text" id="spouseFname" name="spFname" value={this.state.spFname} className="form-control" onChange={this.handleInputs} />
        <h4>Spouse's Last Name</h4>
        <input type="text" id="spouseLname" name="spLname" value={this.state.spLname} className="form-control" onChange={this.handleInputs} />
        <h4>Address</h4>
        <input type="text" id="spaddress" name="spaddress" value={this.state.spaddress} className="form-control" onChange={this.handleInputs} />
        <h4>City (Required)</h4>
        <input type="text" id="city" name="city" value={this.state.city} className="form-control" onChange={this.handleInputs} required />
        <h4>State (Required)</h4>
        <input type="text" id="state" name="state" value={this.state.state} className="form-control" onChange={this.handleInputs} required />
        <h4>Country (Required)</h4>
        <input type="text" id="country" name="country" value={this.state.country} className="form-control" onChange={this.handleInputs} required />
        <h4>Phone Number (Required)</h4>
        <input type="text" id="phone" name="phone" value={this.state.phone} className="form-control" onChange={this.handleInputs} required />
        <h4>Email (Required)</h4>
        <input type="text" id="email" name="email" value={this.state.email} className="form-control" onChange={this.handleInputs} required />
        {/* <h4>Religion</h4>
          <input type="text" id="religion" name="religion" value={this.state.religion} className="form-control" onChange={this.handleInputs} />
          <h4>Occupation</h4>
          <input type="text" id="occupation" name="occupation" value={this.state.occupation} className="form-control" onChange={this.handleInputs} />
          <h4>Education</h4>
          <input type="text" id="education" name="education" value={this.state.education} className="form-control" onChange={this.handleInputs} /> */}

        <h3><strong>General Description</strong></h3>

        <h4>Date of Birth</h4>
        <input type="text" id="dob" className="form-control" required />
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
        <input type="text" id="dob" className="form-control" required />
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
          <label for="exampleFormControlTextarea1">Example text area</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <h4>Spouse's Community sevice / involment</h4>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <h4>Spouse's hobbies and talents</h4>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

        <h4>Date of Mariage</h4>
        <input type="text" id="dob" className="form-control" required />

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
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label" for="defaultCheck1">
            Declared Bankruptcy
                </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label" for="defaultCheck1">
            Been under psychiatric care
                </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label" for="defaultCheck1">
            Dishonorable discharge from the military
                </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label" for="defaultCheck1">
            Been arrested
                </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label" for="defaultCheck1">
            Placed Child for adoption
                </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
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


        <h4>Link to Photo Image (Required)</h4>
        <input type="text" id="photo" name="photo" value={this.state.photo} className="form-control" onChange={this.handleInputs} required />

        <hr />
        <button type="submit" className="btn btn-primary btn-lg btn-block" id="Ssubmit" href="/results"><i className="fa fa-check-circle"
          aria-hidden="true"></i>Submit</button>

      </div>

    )
  }
}

export default sponInfo;