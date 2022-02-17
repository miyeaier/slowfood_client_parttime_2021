import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { List } from 'semantic-ui-react'

const Products = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await axios.get('https://reqres.in/api/products')
    setProducts(response.data.products)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  let prevCategory = ''
  const productList = products
    .sort((a, b) => (a.category < b.category ? 1 : -1))
    .map((product) => {
      return (
        <>
          <List.Item key={product.id}>
            {`${product.name} ${product.price}`}
          </List.Item>
          {prevCategory = product.category}
        </>
      )
      
    })
  return <List id="products-list">{productList}</List>
}

export default Products
