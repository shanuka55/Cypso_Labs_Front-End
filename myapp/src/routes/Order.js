import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import OrderLayout from "../Components/OrderLayout";

const Order = () => {
  return (
    <div>
      <Navbar />
      <Header heading="Manage Orders" />
      <OrderLayout />
    </div>
  );
};

export default Order;
