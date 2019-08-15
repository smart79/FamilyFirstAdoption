import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/home';
import About from './Components/About';
import Contact from './Components/contact';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/contact" component={Contact} />
        </Router>
      </div>

    )
  }
}

export default App;