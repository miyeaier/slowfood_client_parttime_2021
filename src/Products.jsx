import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { List } from 'semantic-ui-react'
import Orders from './Orders'

const Products = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await axios.get('https://reqres.in/api/products')
    setProducts(response.data.products)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const sortedProductList = products?.sort((a, b) =>
    a.category < b.category ? 1 : -1,
  )

  const [order, setOrder] = useState([])
  const [message, setMessage] = useState([])

  const addToOrder = (id) => {
    if (order.length !== 0) {
      Orders.update(id, order.id).then((response) => {
        setMessage(response.message)
        setOrder(response.order)
      })
    } else {
      Orders.create(id, 99).then((response) => {
        setMessage(response.message)
        setOrder(response.order)
      })
    }
  }

  const productList = []
  let prevCategory = ''
  for (let i = 0; i < sortedProductList?.length; i++) {
    let product = sortedProductList[i]

    if (product.category !== prevCategory) {
      productList.push(<List.Header>{product.category}</List.Header>)
    }

    productList.push(
      <List.Item key={product.id}>
        {`${product.name} ${product.price}      `}
        <button data-cy="order-button" onClick={() => addToOrder(product.id)}>
          {' '}
          Order +
        </button>
      </List.Item>,
    )
    prevCategory = product.category
  }

  return <List data-cy="products-list">{productList}</List>
}

export default Products
