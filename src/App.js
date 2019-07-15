import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Form from "./Components/Form/Form.js";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        // {
        //   image:
        //     "https://cdn.shopify.com/s/files/1/0182/4159/products/TasteofSpace_Mens_Tee_Front_600x.jpg?v=1554424836",
        //   name: "UFO Bottle",
        //   price: 10
        // },
        // {
        //   image:
        //     "https://cdn.shopify.com/s/files/1/0182/4159/products/UniversalLove_Mens_Tee_Front_600x.jpg?v=1561562442",
        //   name: "Astro Shaka",
        //   price: 13
        // },
        // {
        //   image:
        //     "https://cdn.shopify.com/s/files/1/0182/4159/products/Pathfinder_Mens_Tee_Front_600x.jpg?v=1551384427",
        //   name: "Universal Tree",
        //   price: 15
        // },
        // {
        //   image:
        //     "https://cdn.shopify.com/s/files/1/0182/4159/products/SpaceVandal_Bright_600x.jpg?v=1539132196",
        //   name: "Spray Aurora",
        //   price: 16
        // }
      ]
    };
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res => {
      console.log(res)
      this.setState({
        products: res.data
      })
    })
    // console.log(res.data)
  }

  render() {
    const { products } = this.state
    return (
      <div>
        <Header />
        <Dashboard products={products}/>
        <Form />
      </div>
    );
  }
}