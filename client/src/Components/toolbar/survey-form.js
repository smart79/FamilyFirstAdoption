import React, { Component } from 'react';

// import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

class Survey extends Component {
  state = {
    // firstName: "",
    // lastName: "",
    // address: "",
    // spFname: "",
    // spLname: "",
    // city: "",
    // state: "",
    // country: "",
    // phone: "",
    // email: "",
    // religion: "",
    // occupation: "",
    // education: "",
    // photo: "",
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
        <div className="container">

        <h3><strong>Your Preferences</strong></h3>
        
<hr/>
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
            <option value="5">United States</option>
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
            
            <option value="6">No preference</option>>
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
          <button type="submit" className="btn btn-primary btn-lg btn-block" id="submit" href="/results"><i className="fa fa-check-circle"
            aria-hidden="true"></i>Submit</button>
        </form>

        </div>

      </div>

    )
  }
}

export default Survey;