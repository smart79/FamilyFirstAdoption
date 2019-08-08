import React, {Component} from 'react';

import Toolbar from './toolbar/toolbar';
import Jumbotron from './toolbar/jumbotron';
import DropMenu from './toolbar/dropmenu';
import Footer from './toolbar/footer';
import NewsForm from './toolbar/newsForm';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

class Home extends Component{
  render(){
    return(
      <div className="Home">
        <Toolbar/>
        <Jumbotron/>
        <DropMenu/>
        <NewsForm/>
        <Footer/>
      </div>

    )
  }
}
  
export default Home;