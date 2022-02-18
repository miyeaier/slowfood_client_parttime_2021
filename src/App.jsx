import React, {useState, useEffect} from 'react';
import Header from "./Header";
import Products from "./Products";
import Footer from "./footer";
import "./index.css";
import { Container } from "semantic-ui-react";

const App = () => {
  const [order, setOrder] = useState([])


  
  return (
    <Container className="BackgroundImage">   <Header />
      <div data-cy="products-list">
        <h3> Menu</h3>
        <Products />
      </div>
      <Footer />
    </Container>
  );
};

export default App;
