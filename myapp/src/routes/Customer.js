import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import CustomerLayout from "../Components/CustomerLayout";

const Customer = () => {
  return (
    <div>
      <Navbar />
      <Header heading="Manage Customer" />
      <CustomerLayout />
    </div>
  );
};

export default Customer;
