import React, { Component } from 'react';

import Jumbotron from './toolbar/jumbotron';
import DropMenu from './toolbar/dropmenu';
import NewsForm from './toolbar/newsForm';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Jumbotron />
        <DropMenu />
        <NewsForm />
      </div>

    )
  }
}

export default Home;