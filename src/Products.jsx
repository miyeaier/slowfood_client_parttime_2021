import axios from 'axios'
import React, { useState, useEffect } from 'react'
//import { api } from "./network"

const Products = () => {

    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
      const response = await axios.get('https://reqres.in/api/food')
      setProducts(response.data.data)
    }
  
    useEffect(() => { 
      fetchProducts()
    },[]);
  
      const productList = products.map((product) => {
        return <li key={product.id}>{`${product.name} ${product.price}`} </li>
      })
      return <ul id="products-list">
        {productList}
        </ul>
    }

export default Products