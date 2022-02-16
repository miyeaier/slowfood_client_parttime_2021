import React from "react";
import Header from "./Header";
import Products from "./Products";
import Home from "./Home";
import Footer from "./Footer";
import "./index.css";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <Container>
      <Header />
      <div data-cy="products-list">
        <h3> Menu</h3>
        <Products />
      </div>
      <Footer />
      <Home />
    </Container>
  );
};

export default App;
