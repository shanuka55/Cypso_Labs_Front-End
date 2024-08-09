import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import ProductLayout from "../Components/ProductLayout";

const Product = () => {
  return (
    <div>
      <Navbar />
      <Header heading="Manage Products" />
      <ProductLayout />
    </div>
  );
};

export default Product;
