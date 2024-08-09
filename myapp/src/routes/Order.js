import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import OrderLayout from "../Components/OrderLayout";
import OrderTable from "../Components/Tables/OrderTable";

const Order = () => {
  return (
    <div>
      <Navbar />
      <Header heading="Manage Orders" />
      <OrderLayout />
      <OrderTable />
    </div>
  );
};

export default Order;
