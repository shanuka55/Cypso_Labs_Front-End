import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import UserLayout from "../Components/UserLayout";

const User = () => {
  return (
    <div>
      <Navbar />
      <Header heading="Manage Users" />
      <UserLayout />
    </div>
  );
};

export default User;
