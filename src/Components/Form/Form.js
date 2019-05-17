import React, {Component} from 'react'
// import axios from 'axios'

class Form extends Component {
  constructor(){
    super()
    this.state = {
      imgurl: '',
      name: '',
      price: 0
    }
  }

  handleImg = (data) => {
    this.setState({
      imgurl: data
    })
  }
  handleName = (data) => {
    this.setState({
      name: data
    })
  }
  handlePrice = (data) => {
    this.setState({
      price: data
    })
  }

  handleCancel = () => {
    this.setState({
      imgurl: '',
      name: '',
      price: 0
    })
  }

  render(){
    return(
      <div>
        {this.state.imgurl === '' ?
        (<div><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAASFBMVEX///+hoaGioqLOzs7v7+/Hx8ezs7Oenp7b29vw8PCmpqb8/Pzs7Oz6+vr09PT39/fl5eW1tbWrq6vT09PBwcHf39+7u7vCwsKGlqVWAAAC0UlEQVR4nO3b2Y6qQBRAURGhoECGQuD//7RpEUEmWyCxT2Wv16vksjvUpJ5OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGC7KLkcKv32DX0uujnH0tm3b+ljoW7+3+owzbW8b9/Sx5oG2j+OkdlAmTI+jHeW2cCPD7ta5NKABjY0iNL0uu9q0htEWVHfvDLZczXhDdLC/10n6NueJ0N2g6jQj4VetWO1K7tB7KtHA1Vsv5roBlHxXPArf/vAKLuBp/pdT7j5ajSQ3sAdPAvbB0XRDU6ZeTZYvYlrHEfL/yq7Qep1Ccxl5eWJZ4y3vIyS3eCU1I66J1g7B2pLVYsRhDc4XYPKN7m7NiB2M6i3NGJIb9BUCN+ciGamnT10sDAmyG/wTvJcS/oLD4z1DYZriIUhwfoGgXZ67uxLbG/QryDuyrnXWN4grF4SKDP3LrsbpN559IHSbWZIsLpB9DIYtBOkO50grW6Q+eMEjmOmQ4JNDZKyfDlISatpAsfJJ2+0qEGca/2yAnDVXAPHG5842dPg8rseVHkfoRyPh53x0aM1DdJb+1evu81DPDMYPMbF0ZrZmgbd8aou2oE/Wf6ahvJfJ0hbGmTPWbDdGV3dybS4OCRY0iCsRjuj0qwkaLbRwzfb0eA6XA+em2VQmK8lGG2jrWjQf+TWRgii2/y02KsGJ09WNBhtDpXxFu58YDAk2NAgnF0PvjEYEixoEE02h3/Sb6MtaDDdHP6JqrqnQX6Dy+osuBahO1kT3yCt3k0Bi/RjGy29weBj1889ryG7QbD1SbhrT9aEN4jfrAffaDdYshsk9aZpsXc/WRPdYLRG3iIPhTfI9OY5oaNq2Q0S/6x3cwLRDcLgCJnoBitfMfpEdBXawDG1e5hc5m95HOd8IIkNEnPcj9paO77u/C2Zd6xi589AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD/+wHl3TRmt3RhRgAAAABJRU5ErkJggg==' alt='product img'/></div>) :
        (<div><img src={this.state.imgurl} alt='product img'/></div>) 
        }


        <h3>Image URL:</h3>
        <input
          onChange={(e) => this.handleImg(e.target.value)}
          value={this.state.imgurl}
        />
        <h3>Product Name:</h3>
        <input
          onChange={(e) => this.handleName(e.target.value)}
          value={this.state.name}
        />
        <h3>Price:</h3>
        <input
          onChange={(e) => this.handlePrice(e.target.value)}
          value={this.state.price}
        />
        <button onClick={this.handleCancel}>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    )
  }
}

export default Form;