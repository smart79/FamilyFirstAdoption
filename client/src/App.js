import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/home';
import About from './Components/About';
import Footer from './Components/toolbar/footer';
import NavMenu from './Components/toolbar/navMenu';
import Login from './Components/Login/login';
import SignUp from './Components/signup/signup';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu />
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signout' component={Login} />
        </Router>
        <Footer />
      </div>

    )
  }
}

export default App;