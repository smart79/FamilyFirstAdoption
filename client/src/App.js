import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/home';
import About from './Components/About';
import Login from './Components/Login/login';
import SignUp from './Components/signup/signup';
import Contact from './Components/contact';
import Results from './Components/results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signout' component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/results" component={Results} />
        </Router>
      </div>

    )
  }
}

export default App;