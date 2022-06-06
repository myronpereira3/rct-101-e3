import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product/Product";
import { CartContext } from "../../context/CartContext";

const Products = () => {
  const [data, setData] = useState([]);
  const {cartCount, increment, decrement} = useContext(CartContext);

  const getData = () => {
    axios.get("http://localhost:8080/products")
    .then((r)=>setData(r.data))
  }

  // const add

  useEffect(()=>{
    getData();
  },[])

  return <div >
    {
      data.map((e)=>(
        <Product key={e.id} e={e} inc={increment} dec={decrement} />
      ))
    }
    
  </div>;
};

export default Products;
