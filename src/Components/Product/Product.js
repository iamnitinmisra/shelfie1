import React, { Component } from 'react';


export default function Product(props){
    // console.log(props)
    
        return (<div>
            <img src={props.product.image}/>
            <div>{props.product.name}</div>
            <div>{props.product.price}</div></div>
        )
    
}

