import axios from "axios";
import React, { useState, useEffect } from "react";
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

  const productList = products.map((product) => {
    return (
      <List.Item key={product.id}>
        {`${product.name} ${product.price}`}
      </List.Item>
    );
  });

  return <List id="products-list">{productList}</List>;
};

export default Products;
