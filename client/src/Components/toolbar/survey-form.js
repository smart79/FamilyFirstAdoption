import React, { Component } from 'react';

// import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

class Survey extends Component {
  state = {
    firstName: "",
    lastName: "",
    address: "",
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
    adoptC: "",
    adoptG: "",
    adoptA: "",
    adoptS: "",
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
      <div className="About">
        <div className="container survey">

          <form>
          <h1><strong>About You</strong></h1>
          <div className="row">
            <div class="form-group col-md-4">
              <label>First Name (Required)</label>
              <input type="text" id="Fname" name="firstName" value={this.state.firstName} className="form-control" onChange={this.handleInputs} required />
            </div>
            <div class="form-group col-md-4">
              <label>Last Name (Required)</label>
              <input type="text" id="Lname" name="lastName" value={this.state.lastName} className="form-control" onChange={this.handleInputs} required />
            </div>
          </div>
          <div className="row">
            <div class="form-group col-md-4">
              <label>Email (Required)</label>
              <input type="text" id="email" name="email" value={this.state.email} className="form-control" onChange={this.handleInputs} required />
            </div>
            <div class="form-group col-md-4">
              <label>Phone Number (Required)</label>
              <input type="text" id="phone" name="phone" value={this.state.phone} className="form-control" onChange={this.handleInputs} required />
            </div>
          </div>
          {/* <h4>Address</h4>
          <input type="text" id="address" name="address" value={this.state.address} className="form-control" onChange={this.handleInputs} />
          <h4>Spouse's First Name</h4>
          <input type="text" id="spouseFname" name="spFname" value={this.state.spFname} className="form-control" onChange={this.handleInputs} />
          <h4>Spouse's Last Name</h4>
          <input type="text" id="spouseLname" name="spLname" value={this.state.spLname} className="form-control" onChange={this.handleInputs} />
          <h4>Address</h4>
          <input type="text" id="spaddress" name="spaddress" value={this.state.spaddress} className="form-control" onChange={this.handleInputs} /> */}
          <div className="row">
          <div className="form-group col-md-4">
          <label>City (Required)</label>
          <input type="text" id="city" name="city" value={this.state.city} className="form-control" onChange={this.handleInputs} required />
          </div>
          <div className="form-group col-md-4">
          <label>State (Required)</label>
          <input type="text" id="state" name="state" value={this.state.state} className="form-control" onChange={this.handleInputs} required />
          </div>
          <div className="form-group col-md-4">
          <label>Country (Required)</label>
          <input type="text" id="country" name="country" value={this.state.country} className="form-control" onChange={this.handleInputs} required />
          </div>
          </div>

          {/* <h4>Religion</h4>
          <input type="text" id="religion" name="religion" value={this.state.religion} className="form-control" onChange={this.handleInputs} />
          <h4>Occupation</h4>
          <input type="text" id="occupation" name="occupation" value={this.state.occupation} className="form-control" onChange={this.handleInputs} />
          <h4>Education</h4>
          <input type="text" id="education" name="education" value={this.state.education} className="form-control" onChange={this.handleInputs} /> */}

          <label>Link to Photo Image (Required)</label>
          <input type="text" id="photo" name="photo" value={this.state.photo} className="form-control" onChange={this.handleInputs} required />

          <hr />

          <h3><strong>Question 1</strong></h3>
          <h4>What Country do you wish to Adopt from?</h4>
          <select className="chosen-select" id="q1" name="adoptC" value={this.state.adoptC} onChange={this.handleInputs} >
            <option value=""></option>
            <option value="1">Afghanistan</option>
            <option value="2">Albania</option>
            <option value="3">Algeria</option>
            <option value="4">American Samoa</option>                  
                              Andorra
                              Angola
                              Anguilla
                              Antigua and Barbuda
                              Argentina
                              Armenia
                              Aruba
                              Australia
                              Austria
                              Azerbaijan
                              The Bahamas
                              Bahrain
                              Bangladesh
                              Barbados
                              Belarus
                              Belgium
                              Belize
                              Benin
                              Bermuda
                              Bhutan
                              Bolivia
                              Bosnia and Herzegovina
                              Botswana
                              Brazil
                              Brunei
                              Bulgaria
                              Burkina Faso
                              Burundi
                              Cambodia
                              Cameroon
                              Canada
                              Cape Verde
                              Cayman Islands
                              Central African Republic
                              Chad     
                              Chile
                              People 's Republic of China
                              Republic of China
                              Christmas Island
                              Cocos(Keeling) Islands
                              Colombia
                              Comoros
                              Congo
                              Cook Islands
                              Costa Rica
                              Cote d'Ivoire
                              Croatia
                              Cuba
                              Cyprus
                              Czech Republic
                              Denmark
                              Djibouti
                              Dominica
                              Dominican Republic
                              Ecuador
                              Egypt
                              El Salvador
                              Equatorial Guinea
                              Eritrea
                              Estonia
                              Ethiopia
                              Falkland Islands
                              Faroe Islands
                              Fiji
                              Finland
                              France
                              French Polynesia
                              Gabon
                              The Gambia
                              Georgia
                              Germany
                              Ghana
                              Gibraltar
                              Greece
                              Greenland
                              Grenada
                              Guadeloupe
                              Guam
                              Guatemala
                              Guernsey
                              Guinea
                              Guinea - Bissau
                              Guyana
                              Haiti
                              Honduras
                              Hong Kong
                              Hungary
                              Iceland
                              India
                              Indonesia
                              Iran
                              Iraq
                              Ireland
                              Israel
                              Italy
                              Jamaica
                              Japan
                              Jersey
                              Jordan
                              Kazakhstan
                              Kenya
                              Kiribati
                              North Korea
                              South Korea
                              Kosovo
                              Kuwait
                              Kyrgyzstan
                              Laos
                              Latvia
                              Lebanon
                              Lesotho
                              Liberia
                              Libya
                              Liechtenstein
                              Lithuania
                              Luxembourg
                              Macau
                              Macedonia
                              Madagascar
                              Malawi
                              Malaysia
                              Maldives
                              Mali
                              Malta
                              Marshall Islands
                              Martinique
                              Mauritania
                              Mauritius
                              Mayotte
                              Mexico
                              Micronesia
                              Moldova
                              Monaco
                              Mongolia
                              Montenegro
                              Montserrat
                              Morocco
                              Mozambique
                              Myanmar
                              Nagorno - Karabakh
                              Namibia
                              Nauru
                              Nepal
                              Netherlands
                              Netherlands Antilles
                              New Caledonia
                              New Zealand
                              Nicaragua
                              Niger
                              Nigeria
                              Niue
                              Norfolk Island
                              Turkish Republic of Northern Cyprus
                              Northern Mariana
                              Norway
                              Oman
                              Pakistan
                              Palau
                              Palestine
                              Panama
                              Papua New Guinea
                              Paraguay
                              Peru
                              Philippines
                              Pitcairn Islands
                              Poland
                              Portugal
                              Puerto Rico
                              Qatar
                              Romania
                              Russia
                              Rwanda
                              Saint Barthelemy
                              Saint Helena
                              Saint Kitts and Nevis
                              Saint Lucia
                              Saint Martin
                              Saint Pierre and Miquelon
                              Saint Vincent and the Grenadines
                              Samoa
                              San Marino
                              Sao Tome and Principe
                              Saudi Arabia
                              Senegal
                              Serbia
                              Seychelles
                              Sierra Leone
                              Singapore
                              Slovakia
                              Slovenia
                              Solomon Islands
                              Somalia
                              Somaliland
                              South Africa
                              South Ossetia
                              Spain
                              Sri Lanka
                              Sudan
                              Suriname
                              Svalbard
                              Swaziland
                              Sweden
                              Switzerland
                              Syria
                              Taiwan
                              Tajikistan
                              Tanzania
                              Thailand
                              Timor - Leste
                              Togo
                              Tokelau
                              Tonga
                              Transnistria Pridnestrovie
                              Trinidad and Tobago
                              Tristan da Cunha
                              Tunisia
                              Turkey
                              Turkmenistan
                              Turks and Caicos Islands
                              Tuvalu
                              Uganda
                              Ukraine
                              United Arab Emirates
                              United Kingdom
            <option value="4">United States</option>
                              Uruguay
                              Uzbekistan
                              Vanuatu
                              Vatican City
                              Venezuela
                              Vietnam
                              British Virgin Islands
                              Isle of Man
                              US Virgin Islands
                              Wallis and Futuna
                              Western Sahara
                              Yemen
                              Zambia
                              Zimbabwe
            
            <option value="5">No preference</option>>
          </select>

          <h3><strong>Question 2</strong></h3>
          <h4>Do you have a gender preference when adopting? </h4>
          <select className="chosen-select" id="q2" name="adoptG" value={this.state.adoptG} onChange={this.handleInputs}>
            <option value=""></option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">No Preference</option>ion>
          </select>

          <h3><strong>Question 3</strong></h3>
          <h4>What age Group do you prefer to adopt?</h4>
          <select className="chosen-select" id="q2" name="adoptA" value={this.state.adoptA} onChange={this.handleInputs}>
            <option value=""></option>
            <option value="1">under 5 years</option>
            <option value="2">over 5 years old</option>
            <option value="3">No Preference</option>>
          </select>

          <h3><strong>Question 4</strong></h3>
          <h4>Will you concider Special needs when adopting?</h4>
          <select className="chosen-select" id="q2" name="adoptS" value={this.state.adoptS} onChange={this.handleInputs}>
            <option value=""></option>
            <option value="1">Yes</option>
            <option value="2">No</option>
            <option value="3">special needs only</option>

          </select>
<br/>
<br/>

          {/* <h3><strong>General Description</strong></h3>

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
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}



          <button type="submit" className="btn btn-primary btn-lg btn-block" id="submit" href="/results"><i className="fa fa-check-circle"
            aria-hidden="true"></i>Submit</button>
        </form>

        </div>

      </div>

    )
  }
}

export default Survey;