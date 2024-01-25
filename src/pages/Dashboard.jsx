import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Dashboard = () => {


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Dashboard;
