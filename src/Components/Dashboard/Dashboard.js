import React, { Component } from "react";
import Product from "../Product/Product";

export default function Dashboard(props) {
  // console.log(props)
  const mappedProducts = props.products.map(product => {
    return (
      <div>
        <Product 
        product={product}
        // products={props.products}
        />
      </div>
    );
  });
  return <div>{mappedProducts}</div>;
}
