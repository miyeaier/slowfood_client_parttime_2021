import React from 'react'
import Header from './Header'
import Products from './Products'



const App = () => {
  return (
    <>
      <h1>Slowfood</h1>
      <Header />
      <div data-cy= 'products-list'> <Products></Products></div>
    </>
    
  )
}

export default App
