import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import UserLayout from "../Components/UserLayout";
import UserTable from "../Components/Tables/UserTable";

const User = () => {
  return (
    <div>
      <Navbar />
      <Header heading="Manage Users" />
      <UserLayout />
      <UserTable />
    </div>
  );
};

export default User;
