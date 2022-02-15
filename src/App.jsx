import React from "react";
import Header from "./Header";
import Products from "./Products";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <Container>
      <h1>Slowfood</h1>
      <Header />
      <div data-cy="products-list">
        <Products />
      </div>
    </Container>
  );
};

export default App;
