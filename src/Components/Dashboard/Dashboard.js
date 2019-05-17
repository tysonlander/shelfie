import React, {Component} from 'react'
// import axios from 'axios'
import Product from '../Product/Product'

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    const mappedInventory = this.props.inventory.map((element, i) =>{
      return(
        <Product
          key={i}
          product={element}
        />
      )
    })
    return(
      <div>
        <h1>Dashboard</h1>
        {mappedInventory}
      </div>
    )
  }
}

export default Dashboard;