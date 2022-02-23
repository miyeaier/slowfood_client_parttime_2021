import React from "react";
import Header from "./Header";
import Products from "./Products";
import Footer from "./footer";
import ReviewOrder from "./ReviewOrder";
import "./index.css";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <Container className="BackgroundImage">
      {" "}
      <Header />
      <div data-cy="products-list">
        <h3> Menu</h3>
        <Products />
      </div>
      <ReviewOrder />
      <Footer />
    </Container>
  );
};

export default App;
