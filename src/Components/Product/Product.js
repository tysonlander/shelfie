import React, {Component} from 'react'
// import axios from 'axios'

class Product extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  // methods
  // handlechange - one for each input 
  // post new product to database
  // clear input boxes

  render(){
    return(
      <div>
        <img src={this.props.product.imgurl} alt='product'/>
        <h2>{this.props.product.name}</h2>
        <h2>{this.props.product.price}</h2>
      </div>
    )
  }
}

export default Product;
