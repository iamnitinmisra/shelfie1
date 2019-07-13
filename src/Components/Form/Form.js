import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: "",
      productName: "",
      price: 0,
      newProductImage: "",
      newProductName: "",
      newProductPrice: 0
    };  
    this.baseState = this.state
  }



  resetForm = () => {
      this.setState(this.baseState)
  }

  render() {
    return (
      <div className="input-container">
        <form>
          Image URL:
          <input
            onChange={event =>
              this.setState({
                newProductImage: event.target.value
              })
            }
            
          />
          Product Name:
          <input
            onChange={event =>
              this.setState({
                newProductName: event.target.value
              })
            }
          />
          Price:
          <input
            onChange={event =>
              this.setState({
                newProductPrice: event.target.value
              })
            }
          />
          <button onClick={this.resetForm} className="cancel_button">Cancel</button>
          <button className="addToInventory">Add to Inventory</button>
        </form>
      </div>
    );
  }
}
