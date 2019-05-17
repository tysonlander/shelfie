import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
  }

  //methods : get inventory from database
  render(){
    return(
    <div className="App">
      <Dashboard/>
      <Form/>
      <Header/>
    </div>
    )
  };
}

export default App;
