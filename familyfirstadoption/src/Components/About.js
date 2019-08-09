import React, {Component} from 'react';

import Survey from './toolbar/survey-form';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

class About extends Component{
    render(){
      return(
        <div className="About">
          <Survey/>
        </div>
  
      )
    }
  }
  
  export default About;