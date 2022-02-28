import React from "react";
import Header from "./component/Header";
import Products from "./component/Products";
import Footer from "./component/Footer";
import ReviewOrder from "./component/ReviewOrder";
import "./index.css";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <>
      <Header />
      <div className="BackgroundImage" data-cy="products-list">
        <h3> Menu</h3>
        <Products />
      </div>
      <ReviewOrder />
      <Footer />
    </>
  );
};

export default App;
