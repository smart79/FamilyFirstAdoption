import React, { Component } from 'react';
import './toolbar/toolbar.css';
import Jumbotron from './toolbar/jumbotron';
import DropMenu from './toolbar/dropmenu';
import NewsForm from './toolbar/newsForm';
import NavMenu from './toolbar/navMenu';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <NavMenu />
        <Jumbotron />
        <DropMenu />
        <NewsForm />
      </div>

    )
  }
}

export default Home;