import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
  }

  //methods : get inventory from database
  componentDidMount(){
    axios.get('http://localhost:3333/api/inventory')
    .then( response => {
      console.log('this is the data you are looking for', response)
      // this.setState({inventory: response.data});
    })
    // .catch(error => {
    //   console.log(error);
    // })
  }
  
  
  render(){
    // console.log(this.state.inventory)
    return(
    <div className="App">
      <Dashboard
      inventory={this.state.inventory}
      />
      <Form/>
      <Header/>
    </div>
    )
  };
}

export default App;
