import React, {Component} from 'react'
// import axios from 'axios'
import Product from '../Product/Product'

class Dashboard extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <h1>Dashboard</h1>
        <Product/>
      </div>
    )
  }
}

export default Dashboard;