import React from "react";
import Header from "./component/Header";
import Products from "./component/Products";
import Footer from "./component/Footer";
import ReviewOrder from "./component/ReviewOrder";
import "./index.css";

const App = () => {
  return (
    <>
    <div data-cy="products-list" className="BackgroundImage" >
       <Header />
       <h2> Menu</h2>
       <Products />
       <ReviewOrder />
       </div>
       
       <Footer />
    </>
  );
};

export default App;
