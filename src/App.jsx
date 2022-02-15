import React from "react";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <Container>
      <Header />
      <div data-cy="products-list">
        <Products />
      </div>
      <Footer />
    </Container>
  );
};

export default App;
