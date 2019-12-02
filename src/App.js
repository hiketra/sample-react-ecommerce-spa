import React, {Component} from 'react';
import HomePage from './homepage.component'
import './App.css'

class App extends Component {
  constructor() {
    super();
  }

  render () {
    return (<div className="App">
    <HomePage>
    </HomePage>
    </div>)
  }
}

export default App;
