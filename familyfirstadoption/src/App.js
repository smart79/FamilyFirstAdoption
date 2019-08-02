import React, {Component} from 'react';

import Toolbar from './Components/toolbar/toolbar';
import Jumbotron from './Components/toolbar/jumbotron';
import DropMenu from './Components/toolbar/dropmenu';
import Footer from './Components/toolbar/footer';
import NewsForm from './Components/toolbar/newsForm';

class App extends Component{
  render(){
    return(
      <div className="App">
      <Toolbar/>
      <Jumbotron/>
      <DropMenu/>
      <NewsForm/>
      <Footer/>

      </div>

    )
  }
}

export default App;