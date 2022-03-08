import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, List } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";


const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get("https://reqres.in/api/products");
    setProducts(response.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const sortedProductList = products?.sort((a, b) =>
    a.category < b.category ? 1 : -1
  );

  const addToOrder = async (id) => {
    const response = await axios.post("https://reqres.in/api/orders", {
      params: { product_id: id },
    });
    toast(response.data.message, { toastId: "message-box" });
    dispatch({
      type: "SET_ORDER_IN_PROGRESS",
      payload: true
    })
    // Need to save order ID here
  };

  const productList = [];
  let prevCategory = "";
  for (let i = 0; i < sortedProductList?.length; i++) {
    let product = sortedProductList[i];

    if (product.category !== prevCategory) {
      productList.push(
        <List.Header key={product.category}>{product.category}</List.Header>
      );
    }

    productList.push(
      <List.Item key={product.id}>
        <button data-cy="order-button" onClick={() => addToOrder(product.id)} className="ui button">
        order +
        </button>
        {`${product.name} ${product.price}      `}
      </List.Item>
    );
    prevCategory = product.category;
  }

  return (
    <>
      <Container>
        <List inverted id="products-list" size="big">
          {productList}
        </List>
      </Container>
      <ToastContainer data-cy="message-box" />
    </>
  );
};

export default Products;
