import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/home';
import About from './Components/About';
import Login from './Components/Login/login';
import SignUp from './Components/signup/signup';
// import Contact from './Components/contact';
import Results from './Components/results';
import Footer from './Components/toolbar/footer';
import NavMenu from './Components/toolbar/navMenu';
import Contact from './Components/Conatct';
import Description from './Components/Description';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavMenu/>

          <Route exact path="/" component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signout' component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/results" component={Results} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Description" component={Description} />
          <Footer/>

        </Router>
      </div>

    )
  }
}

export default App;