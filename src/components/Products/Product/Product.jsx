import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = (props) => {  
  const {cartCount, increment, decrement} = useContext(CartContext);

  console.log(cartCount.count);

  console.log(props);
  // Note: this id should come from api
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{props.e.name}</h3>
      <h6 data-cy="product-description">{props.e.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={props.inc}>+</button>        
        <span data-cy="product-count">{cartCount}</span>
        <button data-cy="product-decrement-cart-item-count-button" disabled={cartCount<=0 ? true : false} onClick={props.dec}>-</button>
        <button data-cy="product-remove-cart-item-button" >Remove</button>
      </div>
    </div>
  );
};

export default Product;
