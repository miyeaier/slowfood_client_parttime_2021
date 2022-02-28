import React from "react";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer";
import ReviewOrder from "./ReviewOrder";
import "./index.css";
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
