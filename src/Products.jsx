import React, { useState, useEffect } from "react";
import axios from "axios";
import { List } from "semantic-ui-react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("https://reqres.in/api/products");
    setProducts(response.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const sortedProductList = products.sort((a, b) =>
  a.category < b.category ? 1 : -1
  );
  
  const productList = [];
  let prevCategory = "";
  for (let i = 0; i < sortedProductList.length; i++) {
    let product = sortedProductList[i];

    if (product.category !== prevCategory) {
      productList.push(<List.Header>{product.category}</List.Header>);
    }

    productList.push(
      <List.Item key={product.id}>
        {`${product.name} ${product.price}`}
      </List.Item>
    );
    prevCategory = product.category;
  }

  return <List id="products-list">{productList}</List>;
};

export default Products;
