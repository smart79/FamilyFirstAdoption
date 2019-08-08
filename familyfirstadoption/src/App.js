import React, {Component} from 'react';

// import AppAbout from './AppAbout';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Home from './Components/home';
import About from './Components/About';


class App extends Component{
  render(){
    return(
      <Router>
      <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/About" component={About}/>
      </div>
      </Router>


    )
  }
}

export default App;