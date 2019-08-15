import React, { Component } from 'react';
import Survey from './toolbar/survey-form';
import NavMenu from './toolbar/navMenu';

class About extends Component {
  render() {
    return (
      <div className="About">
        <NavMenu />
        <hr />
        <Survey />
      </div>

    )
  }
}

export default About;