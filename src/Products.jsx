import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { List } from 'semantic-ui-react'
import Orders from './Orders'
import { ToastContainer, toast } from 'react-toastify'

const Products = () => {
  const [products, setProducts] = useState([])
  const [order, setOrder] = useState([])
  const [message, setMessage] = useState('')
  const notify = () => toast(message, { toastId: 'message-box' })

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

  const addToOrder = async (id) => {
    const response = await axios.post('https://reqres.in/api/products', {
      params: { product_id: id },
    })
    toast(response.data.message, { toastId: 'message-box' })
    //debugger
    // if (order.length !== 0) {
    //   await Orders.update(id, order.id).then((response) => {
    //     setMessage(response.message)
    //     setOrder(response.order)
    //   })
    // } else {
    //   await Orders.create(id, 99).then((response) => {
    //     setMessage(response.message)
    //     setOrder(response.order)
    //     debugger
    //   })
    // }
    notify()
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

  return (
    <>
      <List data-cy="products-list">{productList} </List>
      <ToastContainer data-cy="message-box" />
    </>
  )
}

export default Products
