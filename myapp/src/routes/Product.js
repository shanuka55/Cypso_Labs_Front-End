import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import ProductLayout from "../Components/ProductLayout";
import ProductTable from "../Components/Tables/ProductTable";

const Product = () => {
  return (
    <div>
      <Navbar />
      <Header heading="Manage Products" />
      <ProductLayout />
      <ProductTable />
    </div>
  );
};

export default Product;
