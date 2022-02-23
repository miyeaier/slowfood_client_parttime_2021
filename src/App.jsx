import React from "react";
import Header from "./Header";
import Products from "./Products";
import Footer from "./footer";
import ReviewOrder from "./ReviewOrder";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <>
      <Header />
      <div data-cy="products-list">
        <h3> Menu</h3>
        <Products />
      </div>
      <ReviewOrder />
      <Footer />
    </>
  );
};

export default App;
