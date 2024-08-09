import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import CustomerLayout from "../Components/CustomerLayout";
import CustomerTable from "../Components/Tables/CustomerTable";

const Customer = () => {
  return (
    <div>
      <Navbar />
      <Header heading="Manage Customer" />
      <CustomerLayout />
      <CustomerTable />
    </div>
  );
};

export default Customer;
